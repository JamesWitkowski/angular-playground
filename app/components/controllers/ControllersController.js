var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
    var vm = this;
    vm.controllersStatus = 'Working';
    vm.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
    
    vm.addFriend = function(friend){
       vm.friends.push(friend);
        vm.newFriend = null;
    }
    
}