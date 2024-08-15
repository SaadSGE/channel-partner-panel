<!-- resources/views/emails/general.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Important Update</title>
</head>
<body>
    <h1>Dear User,</h1>
    <p>{{ $message }}</p>
    <p>We encourage you to visit our website for more details:</p>
    <a href="{{ url('/') }}">Visit Our Site</a>
    <p>Thank you for your continued support.</p>
</body>
</html>
