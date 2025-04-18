pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/uthpala99131/Testing-Repo.git'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t uthpala99/nexsstapp-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'testing-dockPass', variable: 'DockerPassword')]){
                    script {
                        bat "docker login -u uthpala99 -p %DockerPassword%"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push uthpala99/nexsstapp-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
