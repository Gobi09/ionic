angular.module('starter.toggleCtrl', [
  ])

.controller('MyCtrl', function($scope) {
  //$scope.groups = [];
 
    $scope.groups =[{
      menu: 'Lunch',
      subMenu: ['Briyani'],
      items:['Mutton Briyani','Checken Briyani']
    },
    {
      menu: 'Soups',
      subMenu: ['Veg Soups'],
      items:['Chilled Cucumber Soup','Checken Manchow soup']
    }
    ];
      //$scope.groups[1] = ;

  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  // $scope.toggleGroup = function(group) {
  //   if ($scope.isGroupShown(group)) {
  //     $scope.shownGroup = null;
  //   } else {
  //     $scope.shownGroup = group;
  //   }
  // };
  // $scope.isGroupShown = function(group) {
  //   return $scope.shownGroup === group;
  // };



    $scope.toggleSubMenu = function(item) {
    if ($scope.isGroupShown(item)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownGroup === item;
  };
  
})

.controller('menu', function($scope,$http) {

    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxMenu.php').success(function(data){
    //console.log(data);
    $scope.Menus=data.rows;
    // console.log($scope.Menus);
    // alert($scope.Menus);
    //alert(data); 
    }).error(function(){
      alert("error");
    });


  // $scope.Menus =[
  // {
  //     menu: 'LUNCH',
  //     id:1
  //   },
  //   {
  //     menu: 'SOUPS',
  //     id:2
  //   },
  //   {
  //     menu: 'DINNER',
  //     id:3
  //   },
  //   {
  //     menu: 'APPETIZERS',
  //     id:4
  //   },
  //   {
  //     menu: 'DESERTS',
  //     id:5
  //   },
  //   {
  //     menu: 'DEINGS',
  //     id:6
  //   }
  //   ];
  })
.controller('subMenu', function($scope) {
  $scope.SubMenu =[
    {
      Menu: 'BRIYANI',
      subMenuid:1,
      menuId:1,
      items:['Mushroom Soya Biryani','Checken Briyani']
    },
    {
      Menu: 'VATIETY RICE',
      subMenuid:2,
      menuId:1,
      items:['Fried Rice','Curd Rice', 'Tommoto Rice','carrot Rice']

    },
    {
      Menu: 'VEP SOUP',
      subMenuid:3,
      menuId:1,
      items:['Chilled Cucumber soup','Carrot Soup']

    },
    {
      Menu: 'NON-VEG SOUP',
      subMenuid:4,
      menuId:1,
      items:['Checken Manchow Soup','Mutton Soup']

    }
    ];

    $scope.Finalitem =[{
      item: 'Mushroom Soya Biryani (50 AED)  ',
      subMenuid:1,
      menuId:1,
      itemId:1,
      image:[''],
      ingredients:['Mushroom','Soya Chunks','Basmati rice','Onion','Tomato']
    }];


  $scope.totalCount = function(group) {

    alert($("#quantity").val());
    $urlRouterProvider.otherwise('/addToCart');
    
  };
    $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


  $scope.toggleitem = function(item) {
    if ($scope.isItmeShown(item)) {
      // alert($scope.isItmeShown(item));

        $scope.shownItem = null;
    } else {
      // alert(item);
      $scope.shownItem = item;
    }
  };
  $scope.isItmeShown = function(item) {
    return $scope.shownItem === item;
  };


  })


//Author Pravinkumar on 24/7/2015 latestoffer
  .controller('latestOffer', function($scope) {
    $scope.firstImages = { src : 'img/appetizers-2.jpg' };

  })
  //Author Pravinkumar on 24/7/2015 latestoffer
  .controller('aboutUs', function($scope) {
    $scope.firstImages = { src : 'img/OliviaFront.jpg' };

  })
  //Author Pravinkumar on 24/7/2015
.controller('MapController', function($scope, $ionicLoading, $compile) {
    $scope.initialize = function() {
     var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        $scope.map = map;
    }
})
.controller('contactUsMap', function($scope, $ionicLoading, $compile) {
    $scope.initialize = function() {
     var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        $scope.map = map;
    }
})



  //cart function
.controller('table', function($scope) {
      $scope.totalAmount="";
      $scope.OrderedItem="";
      $scope.OrderedItem=[{
      item: 'Chicken Briyani',
      subMenuid:1,
      menuId:1,
      itemId:1,
      price:20,
      image:'img/bri3.jpg',
      quantity:2,
      subTotal:40
    },
    {
      item: 'Mutton Briyani',
      subMenuid:2,
      menuId:1,
      itemId:1,
      price:400,
      image:'img/bri2.jpg',
      quantity:5,
      subTotal:200
    }
    ];
    

        $scope.removeOrder = function(index) {
          $scope.OrderedItem.splice(index,1);
          alert("order deleted");
        };

        $scope.getTotal = function(){
          //alert("call from");
            var total = 0;
            var length= $scope.OrderedItem.length;

            for(var i = 0; i < length; i++){
                var product = $scope.OrderedItem[i];
                total += parseInt(product.subTotal);
                //alert(product.subTotal);
            }
            $scope.totalAmount=total;
            if (total==0) {
              $("#food").hide();
            };
            return total;
        }

        $scope.getsubtotal = function(val,index){
          //console.log($scope.OrderedItem);
//alert();
          // var quantity=$("#quantity").val();
          var quantity=$(val.target).val() ;
          if(quantity=="" || quantity=="0")
          {
            
            $("#quantity").val(0);
             $("#subTotal").val(0);  
          }
          else
          {

            var data= angular.copy($scope.OrderedItem);
            var price=data[index].price;
            var total = quantity*price;
            $scope.OrderedItem.splice(index,1,{item: data[index].item,
              subMenuid:data[index].subMenuid,
              menuId:data[index].menuId,
              itemId:data[index].itemId,
              price:data[index].price,
              image:data[index].image,
              quantity: quantity,
              subTotal: total}); 
            console.log($scope.OrderedItem);
            $scope.getTotal();
          }
   
            
        }

        $scope.totalCount=function(data) {
          alert(data);
        };

    })

//gallery 

.controller('IntroCtrl', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {
        
    $scope.allImages = 
    [{
        'src' : 'img/d1.jpg'
    }, 
    {
        'src' : 'img/d1.jpg'
    },
    {
        'src' : 'img/d1.jpg'
    }];
 
    $ionicModal.fromTemplateUrl('templates/image-popover.html',
    {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal)
    {
        $scope.modal = modal;
    });

    $scope.openModal = function()
    {
        $ionicSlideBoxDelegate.slide(0);
        $scope.modal.show();
    };

    $scope.closeModal = function() 
    {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() 
    {
        $scope.modal.remove();
    });
    
    $scope.$on('modal.hide', function() 
    {
    
    });
    
    $scope.$on('modal.removed', function() 
    {
    
    });

    $scope.$on('modal.shown', function() 
    {
        console.log('Modal is shown!');
    });

    $scope.next = function() 
    {
        $ionicSlideBoxDelegate.next();
    };
  
    $scope.previous = function() 
    {
        $ionicSlideBoxDelegate.previous();
    };
  
    $scope.goToSlide = function(index) 
    {
        $scope.modal.show();
        $ionicSlideBoxDelegate.slide(index);
    }
  
    $scope.slideChanged = function(index) 
    {
        $scope.slideIndex = index;
    };
});
 

  
