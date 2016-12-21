angular.module('starter.controllers', ['ngMessages'])
.controller('AppCtrl', function($scope,$state, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.SignupForm = function(){
      if ($scope.signup_form.$valid) {
            $state.go("app.areablock")
      }else{
        console.log("wrong")
      }
    }
  // Form data for the login modal
  $scope.searchData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/jizhisearch.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the  modal to close it
  $scope.closSearch = function() {
    $scope.modal.hide();
    $scope.searchData.search_content="";
  };

  // Open the modal
  $scope.jizhisearch = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSearch = function() {
    console.log('WE WILL SEARCH', $scope.searchData);
    //if( searchData.search_content = ""){
    //}
    //else{
    //}
    //
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closSearch();
    }, 2000);
    //$scope.submit = function() {
    //  $state.go("app.scared");
    //};
  };
    //$scope.toCalculate = function(){
    //  $state.go("app.tool_calculate");
    //};
})
  //此处自定义的属性指令：ngFocus用于登录页面的注册画面失焦后的验证
  .directive('ngFocus', function () {
    var FOCUS_CLASS = "ng-focused";
    return{
      restrict:'A',
      require:'ngModel',
      link: function (scope, element, attrs,ctrl) {
        ctrl.$focused = false;
        element.bind('focus', function (evt) {
          element.addClass(FOCUS_CLASS);
          scope.$apply(function () {
            ctrl.$focused = true;
          });
        }).bind('blur', function () {
          element.removeClass(FOCUS_CLASS);
          scope.$apply(function(){
            ctrl.$focused = false;
          })
        })
      }
    }
  })
  .controller('ClientCtrl', function($scope) {
    $scope.clients = [
      { name: '胡旭', pic: 'img/client_me.png' ,account:'450803313'}
    ];
  })
.controller('PlaylistsCtrl', function($scope,$timeout,$ionicActionSheet) {
  $scope.playlists = [
    { title: 'Reggae', id: 1,pic:"img/up_duck.png" },
    { title: 'Chill', id: 2 ,pic:"img/duck.png" },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 }
  ];
    //此处图片显示是分大小写的（JPG），并且不需"../"符号来指定图片存储空间，即index.html同文件下操作。
  $scope.newlists = [
    { title: 'Angular2.0 coming!', id: 1,pic:"img/newslist_1.JPG",time:"10分钟前",number:6},
    { title: 'China have the FAST now', id: 2,pic:"img/newlist_5.JPG",time:"20分钟前",number:20},
    { title: 'Hello Googol times star ', id: 3,pic:"img/newslist_4.JPG",time:"1小时前",number:12 },
    { title: 'Fly in the sky pokemon', id: 4,pic:"img/newslist_6.JPG",time:"3小时前" ,number:26},
    { title: 'France are strange guys!', id: 5,pic:"img/newlist_7.JPG",time:"09-24" ,number:5}
  ];

  $scope.showS = true;
    //下面是下拉刷新的实现段落
  $scope.doRefresh = function() {
    // console.log("ok");
    $timeout(function() {
      //$scope.messageDetils = messageService.getAmountMessageById($scope.messageNum,
      //  $stateParams.messageId);
      $scope.newlists.push({ title: 'Wali love Molin so much', id: 6,pic:"img/wali4.png",time:"09-23",number:5 })
      $scope.$broadcast('scroll.refreshComplete');
    }, 2000);
  };
    //下面是上拉菜单的实现效果
      $scope.upShow = function () {
      console.log("ok");
      var hideSheet = $ionicActionSheet.show({
        button:[{},{}],
        destructiveText:'Delete',
        titleText:'Modify',
        cancelText:'Cancel',
        cancel: function () {

        },
        buttonClicked: function(index) {
          return true;
        }
      });
      $timeout(function(){
        hideSheet();
      },2000)
    }
    $scope.ok = function(){
      console.log("ok");
    }
    $scope.checkNews = function(){
      console.log("ok",newlists.id);
    }
    //$scope.showSearch = function() {
    //   console.log("ok");
    //  $scope.showS = true;
    //};
})

  //.controller('CalculCtrl', function($scope, $state,$timeout) {
  //  $scope.onSwipeRight = function () {
  //
  //    $timeout(function() {
  //      $state.go("app.areablock");
  //    }, 30);
  //  };
  //
  //})
