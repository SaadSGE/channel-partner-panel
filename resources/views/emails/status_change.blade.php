<!-- resources/views/emails/status_changed.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Application Status Changed</title>
</head>
<body>
    <h1>Status Update for Application ID: {{ $application->id }}</h1>
    <p>The status of the following application has been updated:</p>
    <ul>
        <li><strong>Application ID:</strong> {{ $application->id }}</li>
        <li><strong>New Status:</strong> {{ $application->status }}</li>
    </ul>
    <p>You can view the updated application status here:</p>
    <a href="{{ url('/applications/' . $application->id) }}">View Application</a>
    <p>Please review the updated details at your earliest convenience.</p>
</body>
</html>
