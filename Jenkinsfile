@Library('jenkins-library@kaniko') _
pipeline {
  agent {
    kubernetes(k8sAgent(resourceType: 'small', appType: 'NODE'))
  }
  stages {
    stage('Docker Build') {
      steps {
        container('m2p-base-kaniko') {
          buildAndPushDocker('m2pfintech01/designsystem:' + env.GIT_COMMIT)
        }
      }
    }
  }
}