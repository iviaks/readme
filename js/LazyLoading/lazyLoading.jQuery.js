function lazyImageLoading(url) {
  var deferred = jQuery.Deferred();
  var img = new Image();
  img.onload = function() {
    deferred.resolve(url);
  };
  img.onerror = function() {
    deferred.reject();
  };
  img.src = url;
  return deferred.promise();
}

jQuery.fn.lazyImageLoading = function() {
  jQuery(this).each(function(index, e) {
    var lazyType = jQuery(e).data("lazy-type");
    var lazyImageURL = jQuery(e).data("lazy-src");
    var lazyErrorURL = jQuery(e).data("lazy-error");
    lazyImageLoading(lazyImageURL)
      .then(function(url) {
        jQuery(e)
          .removeAttr("data-lazy-type")
          .removeAttr("data-lazy-src")
          .removeAttr("data-lazy-error");
        if (lazyType === "backgroundImage") {
          jQuery(e).css({
            backgroundImage: "url(" + url + ")"
          });
        } else if (lazyType === "src") {
          jQuery(e).attr("src", url);
        }
      })
      .catch(function() {
        jQuery(e)
          .removeAttr("data-lazy-type")
          .removeAttr("data-lazy-src")
          .removeAttr("data-lazy-error");
        if (lazyType === "backgroundImage") {
          jQuery(e).css({
            backgroundImage: "url(" + lazyErrorURL + ")"
          });
        } else if (lazyType === "src") {
          jQuery(e).attr("src", lazyErrorURL);
        }
      });
  });
};
