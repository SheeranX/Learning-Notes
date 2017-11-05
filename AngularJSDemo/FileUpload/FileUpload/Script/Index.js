var app = angular.module('app', ['ngFileUpload']);

app.controller('ctrl', function ($scope, Upload) {
    //$scope.$watch('file', function (file) {
    //    $scope.upload($scope.file);
    //});
    //$scope.filename = $scope.file.name;
    $scope.submit = function() {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };
 
    // upload on file select or drop 
    $scope.upload = function (file) {
        Upload.upload({
            url: '/api/files/UpLoad',
            data: { fileUploadObj: "Hello" },
            file:file
        }).then(function (resp) {
            console.log('Success ' + resp.config.data + ' uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
    // for multiple files: 
   
});