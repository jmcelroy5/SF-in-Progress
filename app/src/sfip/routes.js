angular.module('sfip')

.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider

	.when('/', {
		templateUrl: '/views/sfip/home.html',
    controller: function ($scope, $rootScope) {
      $rootScope.pageTitle = 'Home';
      resizeLanding();
    }
	})

	.when('/projects', {
		templateUrl: '/views/sfip/map.html',
    controller: function ($scope, $rootScope) {
      $rootScope.pageTitle = 'Projects';
			$rootScope.collapseNavbar = true;
			bindEvents();
			window.map = initializeMap();
    }
	})

	.when('/about', {
		templateUrl: '/views/sfip/about.html',
    controller: function ($scope, $rootScope) {
      $rootScope.pageTitle = 'About';
			$rootScope.collapseNavbar = true;
    }
	})

	.when('/admin/projects', {
		templateUrl: '/views/sfip/project-submission.html',
    controller: function ($scope, $rootScope) {
      $rootScope.pageTitle = 'Submit A Project';
			$rootScope.collapseNavbar = true;
    }
	})

	.when('/update', {
		templateUrl: '/views/sfip/meeting-info.html',
    controller: function ($scope, $rootScope) {
      $rootScope.pageTitle = 'Planning Meeting Submission';
			$rootScope.collapseNavbar = true;
    }
	})

  .otherwise({
		templateUrl: '/views/sfip/404.html'
  })
})
