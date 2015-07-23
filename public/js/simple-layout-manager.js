var simpleLayoutManager = {};

function getLayout(path) {

  if (!simpleLayoutManager[path]) {

    $.ajax({

      async : false,
      url : path,
      success : function (data) {
        simpleLayoutManager[path] = data;
      }

    });

  }

  return simpleLayoutManager[path];

}
