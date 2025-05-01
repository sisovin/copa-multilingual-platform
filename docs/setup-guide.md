# Setup Guide

This guide will help you set up the Copa Multilingual Platform on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)
- Docker (optional, for running services in containers)

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/sisovin/copa-multilingual-platform.git
cd copa-multilingual-platform
```

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

```bash
# Database
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Voice API
VOICE_API_KEY=your_voice_api_key

# Google Translation API
GOOGLE_TRANSLATION_API_KEY=your_google_translation_api_key

# JWT Secret
JWT_SECRET=your_jwt_secret

# WebRTC
WEBRTC_SERVER_URL=your_webrtc_server_url

# Sentry
SENTRY_DSN=your_sentry_dsn
SENTRY_ENVIRONMENT=your_sentry_environment
SENTRY_RELEASE=your_sentry_release
```

4. Run the database migrations:

```bash
npm run typeorm migration:run
```

5. Start the backend server:

```bash
npm run start:dev
```

The backend server should now be running on `http://localhost:3000`.

## Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

The frontend server should now be running on `http://localhost:3001`.

## Running with Docker (Optional)

If you prefer to run the services in Docker containers, follow these steps:

1. Ensure Docker is installed and running on your machine.

2. Navigate to the root directory of the project:

```bash
cd copa-multilingual-platform
```

3. Build and start the Docker containers:

```bash
docker-compose up --build
```

The backend and frontend services should now be running in Docker containers.

## Setting Up Error Tracking, Monitoring Dashboard, and Alerting System

1. **Error Tracking with Sentry:**

   - Ensure you have added the Sentry environment variables (`SENTRY_DSN`, `SENTRY_ENVIRONMENT`, `SENTRY_RELEASE`) in your `.env` file.
   - Sentry is already configured in the backend. You can verify the setup by checking the Sentry dashboard for any error logs.

2. **Monitoring Dashboard:**

   - Set up a monitoring dashboard using a tool like Grafana.
   - Ensure you have the necessary metrics and logs being collected from your backend and frontend services.
   - Configure alerts and notifications based on the metrics collected.

3. **Alerting System:**

   - Integrate an alerting system like PagerDuty or Opsgenie.
   - Configure alerts based on the monitoring dashboard metrics.
   - Ensure the alerting system is properly set up to notify the relevant team members in case of any issues.

## Setting Up Backup Strategy

1. **Database Backups:**

   - Schedule regular backups of your PostgreSQL database.
   - Use tools like pg_dump for creating backups and pg_restore for restoring them.
   - Store the backups in a secure location, such as an S3 bucket or a secure server.

2. **File Storage Backups:**

   - If you are using any file storage services (e.g., Supabase), ensure you have a backup strategy in place.
   - Regularly backup the files to a secure location.

3. **Automated Backup Scripts:**

   - Create automated scripts to handle the backup process.
   - Schedule the scripts to run at regular intervals using a cron job or a similar scheduling tool.

## Conclusion

You have successfully set up the Copa Multilingual Platform on your local machine. You can now start developing and testing the application. If you encounter any issues, refer to the [Troubleshooting Manual](docs/troubleshooting-manual.md) for assistance.
