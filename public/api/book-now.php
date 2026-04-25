<?php
// Simple booking form mailer endpoint for static Next.js export hosting.
// Put this file on your Hostinger hosting (it will be copied into /out/api/book-now.php during export).

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Basic origin check (optional). Adjust/remove if needed.
if (isset($_SERVER['HTTP_ORIGIN'])) {
  $origin = $_SERVER['HTTP_ORIGIN'];
  $allowed = [
    // Add your production domain(s) here
    'https://haramainumrahtaxi.com',
    'https://www.haramainumrahtaxi.com'
  ];
  if (in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
  }
}

function get_post(string $key): string {
  if (!isset($_POST[$key])) return '';
  $val = trim((string)$_POST[$key]);
  return $val;
}

$guestName = get_post('guestName');
$contact = get_post('contact');
$whatsapp = get_post('whatsapp');
$email = get_post('email');
$pickupLocation = get_post('pickupLocation');
$dropoffLocation = get_post('dropoffLocation');
$vehicles = get_post('vehicles');
$pickupDate = get_post('pickupDate');
$pickupTime = get_post('pickupTime');
$totalPassengers = get_post('totalPassengers');

if ($guestName === '' || $contact === '' || $pickupLocation === '' || $dropoffLocation === '' || $pickupDate === '' || $pickupTime === '' || $totalPassengers === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

$to = 'info@haramainumrahtaxi.com'; // CHANGE to your receiving email
$subject = 'New Booking Request - Haramain Umrah Taxi';

$messageText = "New booking request received:\n\n" .
  "Guest Name: {$guestName}\n" .
  "Contact: {$contact}\n" .
  "WhatsApp: " . ($whatsapp !== '' ? $whatsapp : $contact) . "\n" .
  "Email: {$email}\n\n" .
  "Pickup Location: {$pickupLocation}\n" .
  "Dropoff Location: {$dropoffLocation}\n" .
  "Vehicles: {$vehicles}\n\n" .
  "Pickup Date: {$pickupDate}\n" .
  "Pickup Time: {$pickupTime}\n" .
  "Total Passengers: {$totalPassengers}\n";

$fromEmail = 'no-reply@haramainumrahtaxi.com'; // ideally an email on your domain
$headers = "From: Haramain Booking <{$fromEmail}>\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : $fromEmail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// Attachment handling (optional)
$hasFile = isset($_FILES['attachment']) && is_array($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK;

if (!$hasFile) {
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
  $ok = mail($to, $subject, $messageText, $headers);
  if (!$ok) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send email']);
    exit;
  }
  echo json_encode(['ok' => true]);
  exit;
}

$tmpName = $_FILES['attachment']['tmp_name'];
$fileName = basename((string)$_FILES['attachment']['name']);
$fileType = (string)$_FILES['attachment']['type'];
$fileContents = file_get_contents($tmpName);

if ($fileContents === false) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Could not read attachment']);
  exit;
}

$boundary = '=_Part_' . md5((string)microtime(true));
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

$body = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
$body .= $messageText . "\r\n\r\n";

$body .= "--{$boundary}\r\n";
$body .= "Content-Type: {$fileType}; name=\"{$fileName}\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n\r\n";
$body .= chunk_split(base64_encode($fileContents)) . "\r\n";
$body .= "--{$boundary}--\r\n";

$ok = mail($to, $subject, $body, $headers);
if (!$ok) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Failed to send email (attachment)']);
  exit;
}

echo json_encode(['ok' => true]);
