<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!---<base href="/angular_pract/">---->
      <link rel="stylesheet" href="css/bootstrap.css" />
      <link rel="stylesheet" href="css/angular-toastr.min.css">
      <link rel="stylesheet" href="css/loading-bar.min.css">

      <script src="js/angular.min.js"></script>
      <script src="js/jquery.js"></script>
      <script src="js/angular-toastr.tpls.js"></script>
      <script src="js/angular-ui-router.min.js"></script>
      <script src="js/loading-bar.min.js"></script>
      <script src="angular/app.js"></script>
      <script src="angular/data_urls.js"></script>

      <script src="angular/modules/home.js"></script>
      <script src="angular/modules/users.js"></script>
      <script src="angular/modules/user_detail.js"></script>
      <script src="angular/modules/posts.js"></script>
      <script src="angular/modules/post_detail.js"></script>
      <script src="angular/modules/new_post.js"></script>
      <style type="text/css">
      #main{
        background: #eee;
        margin: 0 auto;
        padding: 4px;
        border: 0px solid #999;
        border-radius: 15px;
        box-shadow: 0px 0px 15px #888888;
        min-height: 400px;
      }
      table { 
        border-spacing: 2px;
        border-collapse: separate;
      }
      table th{
        /*box-shadow: rgb(61, 194, 27) 0px 10px 14px -7px;
        background: linear-gradient(rgb(135, 206, 42) 5%, rgb(92, 191, 42) 100%) rgb(135, 206, 42);*/
        text-align: center;
        border-radius: 4px;
        padding: 10px;
        background: #87CE2A;
        color: white;
      }
      table td { 
        /*box-shadow: rgb(61, 194, 27) 0px 10px 14px -7px;
        background: linear-gradient(rgb(216, 245, 179) 5%, rgb(92, 191, 42) 100%) rgb(216, 245, 179);*/
        border-radius: 4px;
        padding: 8px;
        background-color: #D8F5B3;
      }
      .media
      {
        background-color: #D8F5B3 !important;
        padding: 13px !important;
      }
      .span_user
      {
        color:#aaa;
      }
      .post_link:hover
      {        
        background-color: #87CE2A !important;
        opacity: 0.8;
        cursor: pointer;
      }
      select{
        font-size: 18px;
        width: 200px;
        height: 42px;
        padding:3px;
        margin-bottom: 10px;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        border-radius:4px;
        -webkit-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
        -moz-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
        box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
        color:#888;
        display: inline-block;
        cursor:pointer;
        }
        input
        {
          font-size: 18px;
          color:#888;
          width: 200px;
          margin-bottom: 10px;
          border: 1px solid #BBBBBB;
          border-radius: 4px;
          padding: 2px;
       }
        .MainDivContainer
        { 
          width: 200px;
          height: 300px;
          margin: auto;
          border-radius: 4px;
        }
        .AddNewContainer
        {
          width: 400px;
          height: 300px;
          margin: auto;
          border-radius: 4px;
        }
        .div_detail
        {
          border-radius: 4px;
          background-color: #87CE2A;
          text-align: left;
          color: white;

        }
      </style>
    </head>
    <body ng-app='mainApp'>
        <!-- HEADER AND NAVBAR -->
        <header>
            <nav class="navbar navbar-default navbar-fixed-top" style="background-color:#5f5f5f;">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" ui-sref="home" style="color:white;">Test App</a>
                </div>
            </div>
            </nav>
        </header>
        <br/><br/>
        <!-- MAIN CONTENT AND INJECTED VIEWS -->
        <div id="main" class="container">
            <div ui-view></div>
            <!-- angular templating -->
            <!-- this is where content will be injected -->

        </div>
    </body>
    </html