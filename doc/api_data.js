define({ "api": [
  {
    "type": "post",
    "url": "login",
    "title": "Proses login",
    "version": "0.1.0",
    "name": "Login",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk melakukan proses login, membutuhkan 2 parameter username dan password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username dari pengguna.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password dari pengguna</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Menampilkan status apakah proses login berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token pengguna untuk mengakses API lain</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "login",
    "title": "Proses login",
    "version": "0.1.0",
    "name": "Login",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk melakukan proses login, membutuhkan 2 parameter username dan password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username dari pengguna.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password dari pengguna</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Menampilkan status apakah proses login berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token pengguna untuk mengakses API lain</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "user",
    "title": "Menambahkan pengguna",
    "version": "0.1.0",
    "name": "Post_User",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk menambah pengguna.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status proses yang dilakukan.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Menambahkan pengguna",
    "version": "0.1.0",
    "name": "Post_User",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk menambah pengguna.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status proses yang dilakukan.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "user",
    "title": "Menampilkan user yang terdaftar",
    "version": "0.1.0",
    "name": "get_User",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk mengambil data semua pengguna dengan password terenkripsi.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password pengguna (Dienkripsi)</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "user",
    "title": "Menampilkan user yang terdaftar",
    "version": "0.1.0",
    "name": "get_User",
    "group": "Login",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk mengambil data semua pengguna dengan password terenkripsi.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID pengguna diambil dari username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username pengguna</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password pengguna (Dienkripsi)</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "files",
    "title": "mengambil daftar file yang sudah diupload",
    "version": "0.1.0",
    "name": "Get_Files",
    "group": "Upload",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk mengambil daftar file. *</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Menampilkan nama file yang telah diupload</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "files",
    "title": "mengambil daftar file yang sudah diupload",
    "version": "0.1.0",
    "name": "Get_Files",
    "group": "Upload",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk mengambil daftar file. *</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Menampilkan nama file yang telah diupload</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "upload",
    "title": "Mengupload file",
    "version": "0.1.0",
    "name": "Upload",
    "group": "Upload",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk melakukan proses upload file.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>File yang dikirim pengguna.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": "<p>Menampilkan status apakah proses upload berhasil</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "upload",
    "title": "Mengupload file",
    "version": "0.1.0",
    "name": "Upload",
    "group": "Upload",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>API yang digunakan untuk melakukan proses upload file.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>File yang dikirim pengguna.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": "<p>Menampilkan status apakah proses upload berhasil</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Upload"
  }
] });
