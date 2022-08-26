function OrderFormController($scope){

	$scope.services = [
		{
			name: 'Soup',
            price: 100,
            quantity:0,
			active:false
		},{
			name: 'Hakka Noodles ',
            price: 300,
            quantity:0,
			active:false
		},{
			name: 'Fried Rice',
            price: 250,
            quantity:0,
			active:false
		},{
			name: 'Pizza',
            price: 220,
            quantity:0,
			active:false
		},{
			name: 'Pasta',
            price: 200,
            quantity:0,
			active:false
		},{
			name: 'Biryani',
            price: 320,
            quantity:0,
			active:false
		},{
			name: 'Paneer Chilli',
            price: 220,
            quantity:0,
			active:false
		}
    ];
	
	// $scope.toggleActive = function(s){
	// 	s.active = !s.active;
	// };

    
    $scope.increaseItemAmount = function(item) {
        item.quantity++;
        item.active= true;
    }

    $scope.decreaseItemAmount = function(item) {
        item.quantity--;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.active = false;
        } else {
            item.active = true;
        }
    }


	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price*s.quantity;
			}
		});

		return total;
    };
    

}

