app.controller('utilisateurAjouterCtrl', ['$scope', function ($scope) {
	
	$scope.form = {
		statut : "1"
	};


	$scope.ajouter = function(){
		console.table($scope.form);

	};
}])