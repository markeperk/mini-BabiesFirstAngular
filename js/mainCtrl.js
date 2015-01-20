
var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

	$scope.showFriends = true;
	$scope.friends = ['Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross', 'Chandler'];
	$scope.toggleFriends = function() {
		$scope.showFriends = !$scope.showFriends;
	}

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
	};
});


	