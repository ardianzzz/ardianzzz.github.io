---
layout: post
title: Toto, Blog Engine Terkecil
---

Toto adalah sebuah blogengine sederhana buah tangan Alexis Sellier yang juga populer sebagai pembuat less CSS preprosessor. Dengan jargon “git-powered, minimalist blog engine for the hackers of Oz”, Toto bisa dijadikan sebagai salah satu alternatif blog engine yang cukup menarik untuk digunakan.

Engine Toto “hanya” sebuah file rackapp dengan kode tidak lebih dari 300 baris, sangat simpel. Toto sangat ringan cepat dan tidak memerlukan database seperti MySQL dan semacamnya.Tulisan/posting akan disimpan dalam bentuk text file sehingga kita bisa menggunakan text editor favorit. Untuk mengakomodasi komentar, secara default Toto menggunakan Disqus.

##Instalasi

Toto ditulis dalam bahasa Ruby, untuk itu pastikan anda telah menginstall Ruby & Rubygem. Untuk menginstall Toto, jalankan perintah berikut di Terminal:

	$ sudo gem install toto

ps: Jika kita menggunakan RVM, tidak perlu memakai “sudo”

Setelah gem terinstall, kita bisa mengkloning Dorothy — template defaultnya Toto —

	$ git clone git://github.com/cloudhead/dorothy.git myblog

Template Toto berada pada folder “templates” dengan susunan sebagai berikut:

	templates/
	|
	+- layout.rhtml      # layout utama
	|
	+- index.builder     # atom feed layout
	|
	+- pages/            # pages (home, archive dsb) berada disini
	   |
	   +- index.rhtml    # default page
	   |
	   +- article.rhtml  # article page
	   |
	   +- about.rhtml

Dorothy sangat simpel dan mudah untuk dikustomisasi. Kita bisa mengedit semua file dalam folder “templates” untuk mendapatkan tampilan yang kita inginkan.

Membuat Tulisan Baru

Untuk memulai sebuah tulisan baru, caranya sangat mudah yaitu dengan menuliskan perintah berikut:

	$ rake new

Kemuduian masuk ke direktori blog. Toto secara otomatis menggenerate text file dengan nama YY-MM-DD-judul-tulisan.txt kemudian buka file dan cermati:

	title: Judul Tulisan
	date: 1900/05/17

	Once upon a time...

Dua baris pertama (YAML) berfungsi sebagai metadata, tidak usah diutak-atik kecuali bila perlu. Untuk menulis artikel, yang harus kita lakukan hanyalah mengganti tulisan “Once upon a time…” dengan tulisan yang diinginkan. Secara default, Toto menggunakan Markdown untuk mempermudah proses penulisan. Hal ini berarti kita masih bisa menggunakan plain HTML untuk menuliskan konten.

Menjalankan Toto di Server Lokal

Saya menggunakan Thin untuk menjalankan Toto. Pertama-tama install Thin melalui gem dengan perintah berikut:

	$sudo gem install thin

Setelah terinstall, masuk ke direktori blog, kemudian jalankan Thin

	$ cd myblog
	$ thin start -R config.ru

Buka browser kemudian buka http://localhost:3000 dan voila!