//==============

(function() {
  window.addEventListener('load', function() {
    setTimeout(function() {
      var perfEntries = performance.getEntriesByType('navigation');
      if (perfEntries.length > 0) {
        var p = perfEntries[0];
        var loadTime = p.loadEventEnd - p.startTime;
        var loadTimeElement = document.getElementById('loadTime');
        loadTimeElement.innerHTML = 'Page load time: ' + loadTime + 'ms';
      }
    });
  });
})();

//==============