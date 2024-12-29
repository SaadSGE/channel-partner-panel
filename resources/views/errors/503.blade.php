<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }} - Maintenance Mode</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .maintenance-container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 600px;
            width: 90%;
        }
        .logo {
            max-width: 200px;
            margin-bottom: 2rem;
        }
        h1 {
            color: #1227c9;
            margin-bottom: 1rem;
        }
        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        .status {
            display: inline-block;
            background: #ffebee;
            color: #c62828;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-weight: bold;
        }
        .contact {
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #888;
        }
        .contact a {
            color: #1227c9;
            text-decoration: none;
        }
        .contact a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="maintenance-container">
        <h1>We'll be back soon!</h1>
        <div class="status">Maintenance Mode</div>
        <p>
            We're currently performing some maintenance on our systems to serve you better.
            We apologize for any inconvenience and should be back online shortly.
        </p>
        <div class="contact">
            Need urgent assistance? Contact us at:<br>
            <a href="mailto:itsupport@shabujglobal.com">itsupport@shabujglobal.com</a>
        </div>
    </div>
</body>
</html>
