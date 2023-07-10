<?php
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

if ($data && isset($data['email'], $data['name'], $data['surname'], $data['status'], $data['establishment'])) {
    $email = $data['email'];
    $name = $data['name'];
    $surname = $data['surname'];
    $status = $data['status'];
    $establishment = $data['establishment'];
    $target = $data['target'];

    $mailchimpData = [
        'email_address' => $email,
        'status' => 'subscribed',
        'merge_fields' => [
            'FNAME' => $name,
            'LNAME' => $surname,
            'CIBLE' => $target,
            'ESTAB' => $establishment,
        ],
    ];

    $apikey = 'fe3569ba12d7876bae489c02d8ba3495-us20';

    $ch = curl_init("https://us20.api.mailchimp.com/3.0/lists/e4e00eaa3a/members");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apikey
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($mailchimpData));

    $response = curl_exec($ch);

    curl_close($ch);
}


