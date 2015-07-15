/*
 * cpp-ui
 * Author: James A B Gray
 * Version: 0.0.4 - 2015-07-15
 * License: 
 */
angular.module("ui.cpp", ["ui.cpp.tpls", "ui.cpp.footer","ui.cpp.global-nav"]);
angular.module("ui.cpp.tpls", ["footer/footer.html","global-nav/global-nav.html"]);

angular.module("footer/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/footer.html",
    "<footer id=\"footer\" class=\"cpp-footer\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <div class=\"footer-meta-inner\">\n" +
    "          <nav>\n" +
    "            <ul id=\"menu-footer\" class=\"menu list-inline\">\n" +
    "              <li class=\"menu-all-government-blogs\"><a href=\"https://www.blog.gov.uk\">All GOV.UK blogs</a></li>\n" +
    "              <li class=\"menu-all-government-blog-posts\"><a href=\"https://www.blog.gov.uk/all-posts/\">All GOV.UK blog posts</a></li>\n" +
    "              <li class=\"menu-gov-uk\"><a href=\"https://www.gov.uk\">GOV.UK</a></li>\n" +
    "              <li class=\"menu-all-departments\"><a href=\"https://www.gov.uk/government/organisations\">All departments</a></li>\n" +
    "              <li class=\"menu-all-topics\"><a href=\"https://www.gov.uk/government/topics\">All topics</a></li>\n" +
    "              <li class=\"menu-all-policies\"><a href=\"https://www.gov.uk/government/policies\">All policies</a></li>\n" +
    "              <li class=\"menu-cookies\"><a href=\"https://www.blog.gov.uk/cookies\">Cookies</a></li>\n" +
    "            </ul>\n" +
    "          </nav>\n" +
    "          <div class=\"open-government-licence\">\n" +
    "            <p class=\"logo\"><a href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\">Open Government Licence</a></p>\n" +
    "            <p>All content is available under the <a href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\">Open Government Licence v3.0</a>, except where otherwise stated</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2 text-right\">\n" +
    "        <div id=\"crown-copy-cont\" class=\"text-center pull-right\">\n" +
    "          <img src=\"assets/img/govuk-crest.png\"/>\n" +
    "          <br/>\n" +
    "          <a id=\"crown-copy\" target=\"_blank\" href=\"https://www.nationalarchives.gov.uk/information-management/our-services/crown-copyright.htm\">© Crown copyright</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>\n" +
    "");
}]);

'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.footer', []);

// footer Service Template
angular.module('ui.cpp.footer').factory('footerService', function() {

  var footer = { };

  return footer;

});

// footer Filter Template
angular.module('ui.cpp.footer').filter('footerFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// footer Directive Template
angular.module('ui.cpp.footer').directive('footerDirective', function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // replace: true,
    // transclude: true,
    templateUrl: 'footer/footer.html',
    link: function (scope, element, attrs, fn) {

    }
  };
});



angular.module("global-nav/global-nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("global-nav/global-nav.html",
    "<div class=\"globalNav\">\n" +
    "  <img height=\"20\" ng-src=\"{{logoSrc}}\" />\n" +
    "</div>\n" +
    "");
}]);

'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.global-nav', []);

// globalNav Service Template
angular.module('ui.cpp.global-nav').factory('globalNavService', function() {

  var globalNav = { };

  return globalNav;

});

// globalNav Filter Template
angular.module('ui.cpp.global-nav').filter('globalNavFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// globalNav Directive Template
angular.module('ui.cpp.global-nav').directive('globalNavDirective', function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    replace: true,
    transclude: true,
    templateUrl: 'global-nav/global-nav.html',
    link: function (scope, element, attrs, fn) {
      scope.logoSrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2ZzIiIGlua3NjYXBlOnZlcnNpb249IjAuNDguMiByOTgxOSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMTI4LjggMzc3LjggMjQ3IDM3LjYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTEyOC44IDM3Ny44IDI0NyAzNy42IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c29kaXBvZGk6bmFtZWR2aWV3ICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LXg9IjAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjMiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiIGZpdC1tYXJnaW4tdG9wPSIwIiBpZD0iYmFzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBzaG93Z3JpZD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgaW5rc2NhcGU6Y3k9IjM4LjE3MDY3OSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTp6b29tPSIxLjk3OTg5OSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN4PSIxNDAuNjgyMSI+PC9zb2RpcG9kaTpuYW1lZHZpZXc+PGcgaWQ9ImxheWVyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxMi43MDAwMSwtNTE1Ljg2MjE4KSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9IkJsYWNrIj48cmVjdCBpZD0icmVjdDM4ODciIHg9IjE4My45IiB5PSI4OTMuNiIgZmlsbD0iIzBDMEMwRCIgd2lkdGg9IjI0NyIgaGVpZ2h0PSIzNy42Ii8+PC9nPjxnIGlkPSJsYXllcjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMTIuNzAwMDEsLTUxNS44NjIxOCkiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJXaGl0ZSI+PHBhdGggaWQ9InBhdGgzMDUwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzY2NzY2NzY3NjY2Njc2NjY2NzY2NjY2NjY2NjY2NjY3NjY2NzY2NjY2Nzc2NjY2NjY2NzY2NjY2Njc2NjY2NjY3NzY2NzY2Nzc3Njc2Njc2NjY2NjY2NjY3NjY2Njc3NzY3NjY2NjY2NzY2NjY2Njc2Njc2NjY2Nzc3NjY2NzY2NjY2Njc2NjY2Nzc2Njc2NjY2NjY2NjY2NjY2Nzc3Njc3NjY2NjY2NjY3NzY2NjY2NjY2Njc2NjY2NjY2Njc2NjY3NjY3NjY2NjY2NjY2NjY3Nzc2Njc2Nzc2NjY3NjY2NjIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTkyLjIsOTMxLjFjOC4yLTEuMSwxNy44LTEuNCwyNi43LTAuOGMyLjcsMC4yLDYuNSwwLjYsOC4zLDAuOGMwLjgsMC4xLDAuOCwwLjEsMC45LTAuMmMwLjItMS4xLDAuOS0zLjMsMS40LTQuOWMxLTIuOSwyLjUtNS44LDMuOS03LjdjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjJjMCwwLTAuNS0wLjItMS0wLjRzLTEuMS0wLjQtMS4zLTAuNWMtMS40LTAuNS0xLjQtMC41LTEuNC0wLjRjMCwwLDAuMSwwLjQsMC4xLDAuN2MwLjIsMC45LDAuMiwyLDAsMi42Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNWMtMC4xLDAuMS0wLjUtMC42LTAuOS0xLjNjLTAuMy0wLjYtMC43LTEuNy0wLjctMS45YzAsMCwwLTAuMSwwLTAuMWMwLDAtMS44LDUuOS0xLjgsNmMwLDAsMC4yLTAuMSwwLjUtMC4zYzAuNi0wLjQsMS4zLTAuNywxLjctMC44YzAuMy0wLjEsMC42LTAuMSwwLjYtMC4xYzAsMC4xLTAuNSwxLTAuOCwxLjVjLTEuNCwyLjItMy4yLDMuMy00LjgsMi44Yy0xLTAuMy0xLjctMS4xLTEuOC0yLjFjLTAuMS0wLjUsMC0xLDAuMy0xLjVjMC41LTAuOSwxLjMtMS4yLDIuMS0wLjZjMC4yLDAuMiwwLjYsMC43LDAuNywxYzAsMC4xLDAsMC4xLDAuMS0wLjFjMC4yLTAuNCwwLjQtMS4xLDAuNC0xLjVjMC0wLjQsMC0wLjUtMC4xLTAuOWMtMC4xLTAuMy0wLjItMC41LTAuNC0wLjdjLTAuNC0wLjQtMC44LTAuNS0xLjQtMC42Yy0wLjQsMC0xLDAuMS0xLjQsMC4yYy0wLjEsMC4xLTAuMSwwLDAuMi0wLjNjMC45LTEsMS42LTIuMSwxLjgtM2MwLjItMC44LDAuMS0xLjgtMC4yLTIuN2MtMC4yLTAuNS0wLjctMS41LTEuMi0yLjFjLTAuMS0wLjEtMS41LDEuMi0xLjksMS45Yy0wLjksMS40LTEsMy4xLTAuMyw1LjJjMC4xLDAuNCwwLjMsMC44LDAuMywwLjhjMCwwLjEsMCwwLjEtMC4yLTAuMWMtMC43LTAuNi0xLjEtMC44LTEuOC0wLjhjLTAuNywwLTEuMywwLjMtMS42LDFjLTAuMiwwLjMtMC4yLDAuNC0wLjIsMWMwLDAuNiwwLjEsMS41LDAuMiwxLjVjMCwwLDAuMSwwLDAuMSwwYzAtMC4xLDAuNi0wLjcsMC44LTAuOGMxLjMtMC43LDIuNCwxLjIsMS42LDIuOGMtMC40LDAuOS0xLjUsMS42LTIuOSwyYy0wLjQsMC4xLTAuNiwwLjEtMS41LDAuMWMtMS4xLDAtMS43LTAuMS0yLjQtMC40Yy0xLjctMC43LTIuNC0yLTIuNi00LjVsMC0wLjZoMC4yYzEuMSwwLDIuNSwxLDMuNywyLjRsMC4zLDAuNGwwLTAuM2MwLTAuMywwLjUtNS45LDAuNS02LjFjMCwwLTAuMiwwLjEtMC40LDAuM2MtMS4xLDEtMi4yLDEuNS0zLjcsMS43Yy0wLjcsMC4xLTAuNywwLjEtMC43LDBjMC0wLjEsMC41LTEuMSwwLjgtMS42YzAuNC0wLjcsMS4xLTEuNiwxLjctMi4zbDAuNS0wLjZoLTRoLTRsMC4xLDAuMWMwLjcsMC43LDEuNywyLDIuMiwyLjhjMC4zLDAuNSwwLjgsMS40LDAuOCwxLjVjMCwwLjEtMC4xLDAuMS0wLjQsMGMtMS43LTAuMS0yLjgtMC42LTQtMS44Yy0wLjItMC4yLTAuMy0wLjMtMC4zLTAuMmMwLDAuMSwwLjUsNS44LDAuNSw2LjFsMCwwLjJsMC4zLTAuNGMwLjQtMC41LDEuMy0xLjQsMS44LTEuN2MwLjgtMC41LDEuNC0wLjgsMi0wLjhoMC4ybDAsMC42Yy0wLjIsMi42LTEsMy45LTIuOCw0LjVjLTEuMSwwLjQtMi43LDAuNC0zLjgsMC4xYy0yLTAuNS0zLjItMS45LTMtMy40YzAuMy0xLjYsMS43LTIsMi43LTAuNmMwLjEsMC4xLDAuMSwwLjEsMC4xLDAuMWMwLjEtMC4xLDAuMi0wLjksMC4yLTEuNGMwLTEtMC40LTEuNS0xLTEuOWMtMC4zLTAuMS0wLjQtMC4yLTAuOC0wLjJjLTAuNSwwLTAuNSwwLTAuOSwwLjJjLTAuMiwwLjEtMC42LDAuMy0wLjcsMC41bC0wLjMsMC4zbDAuMS0wLjJjMC4yLTAuNSwwLjUtMS42LDAuNi0yLjFjMC4xLTAuOCwwLjEtMS44LTAuMS0yLjVjLTAuMy0wLjgtMC42LTEuNC0xLjQtMi4yYy0wLjUtMC41LTEuMS0xLTEuMS0wLjljLTAuMiwwLjItMC43LDEtMC45LDEuNGMtMC40LDAuOC0wLjUsMS4zLTAuNiwyLjFjMCwwLjYsMCwwLjgsMC4xLDEuMmMwLjIsMC45LDAuOCwyLDEuNywzYzAuMiwwLjIsMC40LDAuNCwwLjMsMC40Yy0wLjctMC4zLTEuNi0wLjMtMi4xLTAuMWMtMS4xLDAuNS0xLjUsMS43LTAuOSwzLjJjMC4xLDAuMiwwLjIsMC40LDAuMiwwLjVjMCwwLDAuMS0wLjEsMC4yLTAuM2MwLjMtMC43LDAuOC0xLDEuNC0xYzAuNiwwLDEsMC40LDEuMywxYzAuOCwxLjctMC41LDMuNy0yLjUsMy43Yy0xLjYsMC0zLjMtMS40LTQuNS0zLjljLTAuMS0wLjItMC4yLTAuNC0wLjItMC40YzAtMC4xLDAuMywwLDAuNiwwYzAuNCwwLjEsMS4xLDAuNCwxLjcsMC44YzAuMywwLjIsMC41LDAuMywwLjUsMC4zYzAsMC0xLjctNS44LTEuNy01LjljMCwwLTAuMSwwLjMtMC4zLDAuN2MtMC4xLDAuNC0wLjQsMS0wLjUsMS4zYy0wLjMsMC42LTAuOCwxLjMtMC45LDEuM2MwLDAtMC4xLTAuMi0wLjItMC40Yy0wLjItMC42LTAuMi0xLjgsMC0yLjdjMC4xLTAuNCwwLjEtMC43LDAuMS0wLjdjMCwwLTAuMywwLjEtMC42LDAuMmMtMS40LDAuNS0zLjEsMS4xLTMuMSwxLjFjMCwwLDAuMiwwLjQsMC41LDAuOGMxLjQsMi4xLDIuNSw0LjQsMy41LDcuNGMwLjQsMS4yLDEsMy4xLDEuMiw0LjJjMC4xLDAuNiwwLjIsMC44LDAuMywwLjhDMTkxLjQsOTMxLjMsMTkxLjgsOTMxLjIsMTkyLjIsOTMxLjFMMTkyLjIsOTMxLjF6IE0xODcuMyw5MTYuMmMxLjMtMC4zLDIuMi0xLjYsMi0yLjljLTAuMS0xLTAuNi0xLjgtMS40LTIuMmMtMC40LTAuMi0wLjgtMC4zLTEuMy0wLjNjLTAuOCwwLTEuNCwwLjMtMiwwLjhjLTAuOCwwLjgtMSwxLjgtMC42LDIuOWMwLjQsMS4xLDEuNCwxLjgsMi41LDEuOEMxODYuOCw5MTYuMywxODcuMSw5MTYuMiwxODcuMyw5MTYuMkwxODcuMyw5MTYuMnogTTIzMy41LDkxNi4xYzAuNy0wLjIsMS4zLTAuNywxLjYtMS40YzAuNS0xLjEsMC4zLTIuMy0wLjUtMy4xYy0wLjYtMC42LTEuMy0wLjktMi4yLTAuOGMtMi4zLDAuMS0zLjQsMy0xLjcsNC43YzAuMywwLjMsMC44LDAuNiwxLjIsMC43QzIzMi40LDkxNi4zLDIzMy4xLDkxNi4zLDIzMy41LDkxNi4xeiBNMjEwLjYsOTExYzEuNC0wLjQsMi40LTIsMi4yLTMuNGMwLTAuMy0wLjQtMS41LTEuMS0zLjVsLTEtMy4xbDAuMi0wLjJsMC4yLTAuMmwwLjYsMC4zYzAuMywwLjIsMS4xLDAuNiwxLjcsMC45bDEuMSwwLjZsMC0xLjNjMC0wLjcsMC0xLjgsMC0yLjZsMC0xLjNsLTEuNywwLjVsLTEuNywwLjVsLTAuMi0wLjJsLTAuMi0wLjJsMC43LTIuMmMwLjQtMS4yLDAuNy0yLjIsMC43LTIuMmMwLDAtMS4xLDAtMi41LDBoLTIuNWwwLjcsMi4xYzAuNCwxLjIsMC43LDIuMiwwLjcsMi4yYzAsMC0wLjEsMC4xLTAuMiwwLjJsLTAuMiwwLjJsLTEuNi0wLjVjLTAuOS0wLjMtMS42LTAuNS0xLjctMC41bC0wLjItMC4xdjIuNnYyLjZsMC41LTAuM2MwLjMtMC4xLDAuOC0wLjQsMS4yLTAuN2MwLjQtMC4yLDAuOS0wLjUsMS4yLTAuNmwwLjUtMC4zbDAuMiwwLjJsMC4yLDAuMmwtMSwzLjFjLTAuNiwxLjctMSwzLjItMS4xLDMuNGMtMC4xLDAuOCwwLjEsMS44LDAuNiwyLjVDMjA3LjksOTExLDIwOS4zLDkxMS40LDIxMC42LDkxMUwyMTAuNiw5MTF6IE0xODkuMSw5MDkuM2MxLTAuMywxLjgtMS4xLDItMi4xYzAuMS0wLjUsMC4xLTAuNiwwLTEuMWMtMC4xLTAuNS0wLjMtMS0wLjctMS4zYy0xLjEtMS4yLTIuOS0xLjEtNCwwYy0wLjQsMC40LTAuNiwwLjgtMC43LDEuNGMtMC4zLDEuNCwwLjcsMi44LDIsMy4yQzE4OC4xLDkwOS40LDE4OC44LDkwOS40LDE4OS4xLDkwOS4zTDE4OS4xLDkwOS4zeiBNMjMxLjUsOTA5LjNjMC43LTAuMiwxLjQtMC43LDEuOC0xLjRjMC41LTEuMSwwLjMtMi4zLTAuNS0zLjFjLTAuMi0wLjItMC41LTAuNC0wLjYtMC41Yy0wLjgtMC40LTEuOC0wLjQtMi42LDBjLTAuNCwwLjItMSwwLjgtMS4yLDEuMmMtMC4yLDAuMy0wLjMsMC45LTAuMywxLjNjMCwwLjMsMC4yLDEsMC40LDEuM2MwLjMsMC42LDEuMSwxLjIsMS43LDEuM0MyMzAuNCw5MDkuNCwyMzEuMiw5MDkuNCwyMzEuNSw5MDkuM0wyMzEuNSw5MDkuM3ogTTIwMi4zLDkwNy44YzEuNy0wLjUsMi41LTIuNCwxLjctNGMtMC4zLTAuNi0wLjktMS4xLTEuNi0xLjNjLTAuNC0wLjEtMS4yLTAuMi0xLjYsMGMtMC42LDAuMi0xLjEsMC42LTEuNSwxLjFjLTAuNywxLjEtMC42LDIuNiwwLjMsMy41QzIwMC4zLDkwNy44LDIwMS40LDkwOC4xLDIwMi4zLDkwNy44TDIwMi4zLDkwNy44eiBNMjE4LjMsOTA3LjhjMS43LTAuNCwyLjYtMi4zLDEuOC0zLjljLTAuNy0xLjQtMi42LTEuOS0zLjktMS4xYy0wLjgsMC41LTEuMywxLjQtMS4zLDIuNEMyMTQuOSw5MDYuOSwyMTYuNSw5MDguMiwyMTguMyw5MDcuOEwyMTguMyw5MDcuOHogTTE5NS40LDkwNS42YzEtMC4zLDEuNy0xLjEsMS45LTIuMWMwLjQtMi0xLjQtMy43LTMuMy0zLjJjLTAuNywwLjItMS40LDAuNy0xLjcsMS4zYy0wLjUsMC45LTAuNSwyLjEsMCwyLjlDMTkzLDkwNS41LDE5NC4yLDkwNS45LDE5NS40LDkwNS42eiBNMjI1LjQsOTA1LjZjMC44LTAuMiwxLjUtMC45LDEuOC0xLjhjMC4yLTAuNSwwLjEtMS40LTAuMS0xLjljLTAuNS0xLjItMS45LTItMy4yLTEuNmMtMi4xLDAuNS0yLjgsMy4xLTEuMyw0LjZDMjIzLjQsOTA1LjYsMjI0LjQsOTA1LjksMjI1LjQsOTA1LjZMMjI1LjQsOTA1LjZ6Ii8+PHBhdGggaWQ9InBhdGgzODg1IiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2Njc2NjY2NjY3NzY2NjY3NzY2NzY2NzY2NjY2NjY3NzY2NjY2NjY2NjY3NjY2Njc2Nzc3NjY2Nzc2NjY2NzY2NjY3NzY2Njc2NjY2NzY2NjY2NjY3NjY2Njc3NjY3NjY2NjY2NjY2NjY2NjY2NjY2MiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNTkuOSw5MzAuMmMwLjgtMC4yLDEuOC0xLjEsMi4yLTJjMC42LTEuNSwwLjItMy4xLTEuMi00LjJjLTEtMC44LTIuNy0wLjktMy43LTAuNGMtMywxLjYtMi41LDUuOSwwLjcsNi42YzAuNCwwLjEsMC45LDAuMSwxLjEsMC4xQzM1OS4xLDkzMC4zLDM1OS41LDkzMC4yLDM1OS45LDkzMC4yTDM1OS45LDkzMC4yeiBNMjc2LjYsOTI5LjVjMi0wLjMsMy4xLTAuNiw1LjUtMS41bDEuOC0wLjZ2LTd2LTdoLTUuNWgtNS41djIuMXYyLjFoMy4xaDMuMXYzLjR2My40bC0yLDAuNmMtMi4zLDAuNy02LjEsMC45LTguMSwwLjVjLTUuOS0xLjItOS45LTYuMS05LjktMTIuM2MwLTUsMi43LTkuMiw3LjEtMTEuM2M0LjMtMiw5LjctMS41LDE1LjMsMS4zbDEuOCwwLjl2LTIuNXYtMi41bC0xLjYtMC42Yy0zLjktMS41LTYuNC0yLTkuOS0yYy01LjMsMC05LjMsMS42LTEyLjcsNWMtMy41LDMuNS01LjIsNy44LTQuOSwxMi44YzAuMSwyLjUsMC41LDQuMiwxLjUsNi40QzI1OC45LDkyNy44LDI2Ni44LDkzMS4yLDI3Ni42LDkyOS41TDI3Ni42LDkyOS41eiBNMzA4LjQsOTI5LjljNi40LTAuNywxMS40LTMuOSwxNC05LjFjMS4zLTIuNiwxLjctNC4zLDEuNy03LjZjMC0yLjUtMC4xLTMtMC41LTQuNmMtMS44LTUuOS02LTkuOS0xMi0xMS42Yy0xLjQtMC40LTIuMS0wLjQtNS0wLjRjLTIuOSwwLTMuNiwwLjEtNS4xLDAuNWMtNS4zLDEuNC05LjEsNC45LTExLjIsOS45Yy0xLjUsMy42LTEuNiw4LTAuMywxMS43YzAuOSwyLjcsMS44LDQuMiw0LDYuM2MxLjgsMS44LDIuMiwyLjEsNC4xLDNjMi4zLDEuMSwzLjgsMS42LDYsMS44QzMwNi4xLDkzMC4xLDMwNi4xLDkzMC4xLDMwOC40LDkyOS45TDMwOC40LDkyOS45eiBNMzAzLjQsOTI1LjJjLTQuMy0xLjEtNy41LTQtOC44LTcuOWMtMC40LTEuMy0wLjUtMS44LTAuNS00LjFjMC0yLjQsMC4xLTIuNywwLjYtNC4yYzEuMi0zLjIsMy4xLTUuMiw1LjktNi43YzMuNy0xLjgsOC4xLTEuOCwxMS45LDBjMi45LDEuNCw1LjIsNC4yLDYuMiw3LjRjMS4xLDMuOCwwLjIsOC40LTIuMywxMS41Yy0xLjEsMS40LTMuNSwyLjktNS41LDMuNkMzMDguOSw5MjUuNCwzMDUuMiw5MjUuNiwzMDMuNCw5MjUuMkwzMDMuNCw5MjUuMnogTTM4NS41LDkyOS44YzIuMi0wLjIsNC4zLTAuOSw2LTEuOGMxLjctMC45LDMuOC0zLjIsNC42LTQuOGMxLjItMi41LDEuMi0zLjIsMS4yLTE1LjR2LTExaC0yLjNoLTIuM2wwLDkuOGMwLDEwLjQtMC4xLDEyLjktMC44LDE0LjVjLTAuNSwxLjEtMi4zLDIuOS0zLjUsMy42Yy0xLjMsMC43LTMuMSwxLTUuMSwxYy0zLjMsMC01LjUtMC45LTcuNC0yLjljLTEuOC0yLTEuNy0xLjQtMS44LTE0LjVsLTAuMS0xMS41aC0yLjRoLTIuNGwwLjEsMTEuNWMwLjEsMTIuNywwLjEsMTIuNSwxLjMsMTUuMmMxLjgsMy43LDYuNCw2LjEsMTIuNCw2LjVDMzgzLjQsOTMwLjEsMzg0LjUsOTMwLDM4NS41LDkyOS44TDM4NS41LDkyOS44eiBNMzQ0LjYsOTE5LjJjMi40LTUuNyw1LjQtMTIuOCw2LjYtMTUuN2MxLjItMi45LDIuMy01LjYsMi41LTZsMC4zLTAuN2gtMi40aC0yLjRsLTIuMSw1Yy0xLjIsMi44LTMuMiw3LjYtNC41LDEwLjdzLTIuNSw1LjktMi43LDYuM2wtMC4zLDAuN2wtMC4zLTAuNWMtMC4xLTAuMy0yLjMtNS4zLTQuOC0xMS4yYy0yLjUtNS45LTQuNi0xMC44LTQuNy0xMC45Yy0wLjEtMC4xLTEuMi0wLjEtMi41LTAuMUwzMjUsODk3bDAuOSwyYzAuNSwxLjEsMy41LDguMiw2LjgsMTUuOGMzLjIsNy42LDYsMTQuMSw2LjIsMTQuNGMwLjIsMC41LDAuNCwwLjUsMC45LDAuNUMzNDAuMiw5MjkuNiwzNDAuMyw5MjkuNSwzNDQuNiw5MTkuMkwzNDQuNiw5MTkuMnogTTQwOCw5MjEuNmwwLjEtNy45bDIuMywyLjJjMS4zLDEuMiwzLjcsMy42LDUuNCw1LjJjMS43LDEuNiw0LjMsNC4yLDUuOCw1LjdsMi43LDIuN2wzLjMsMGwzLjMsMGwtMy41LTMuNWMtMS45LTEuOS01LjktNS44LTguOC04LjZsLTUuMy01LjFsMy4xLTMuNGMxLjctMS45LDQuOS01LjMsNy4xLTcuN2w0LTQuM2wtMy0wLjFsLTMtMC4xbC0wLjUsMC42Yy0wLjMsMC4zLTEsMS4xLTEuNywxLjlzLTMuMiwzLjQtNS41LDZjLTIuNCwyLjYtNC42LDUuMS01LDUuNWwtMC43LDAuOGwwLTcuM2wwLTcuM2gtMi41SDQwM3YxNi4zdjE2LjNoMi41aDIuNUw0MDgsOTIxLjZMNDA4LDkyMS42eiIvPjwvZz48L3N2Zz4=";
    }
  };
});


