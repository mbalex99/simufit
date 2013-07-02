/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/27/13
 * Time: 4:09 PM
 * To change this template use File | Settings | File Templates.
 */


exports.index = function(req, res){
  res.render('app/index', {
      title: 'Express'
      ,reasons: [
          "Razor Syntax"
          ,"Still HTML"
          ,"You can macro your macros into your macros, if you want"
      ]
  });
};