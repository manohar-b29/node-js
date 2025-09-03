pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/manohar-b29/node-js.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Create Artifact') {
            steps {
                sh '''
                  mkdir -p artifacts
                  tar -czf artifacts/nodejs-app.tar.gz *
                '''
                archiveArtifacts artifacts: 'artifacts/*.tar.gz', fingerprint: true
            }
        }
    }
 post {
        success {
            echo 'Artifact created and stored in Jenkins.'
        }
    }
}
