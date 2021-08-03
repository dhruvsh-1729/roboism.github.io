// let json =  [];

// let output = [];
// output = json.map(object => ({
//     name: object.name,
//     position: object['Year'] + " Year",
//     image: "/images" + object['image-link'].slice(5),
//     linkedin: object.linkedin == '' ? undefined : object.linkedin,
//     github: object.github == '' ? undefined : object.github,
//     email: object.mail == '' ? undefined : object.mail,
// }));

// console.log(JSON.stringify(output));

let csv = `Aaditya Pramod,Sophomore,aaditya2002pramod@gmail.com,https://www.linkedin.com/in/aaditya-pramod-499937210/,https://github.com/madpro25,/image/members/Aaditya Pramod.jpeg,jpeg
Abdullah,Sophomore,101mdabdullah@gmail.com,linkedin.com/in/abdullah-43b7a0205,https://github.com/chef-of-mint,/image/members/Abdullah.jpg,jpg
Aman kanojiya,Sophomore,A.kanojiya2003@gmail.com,https://www.linkedin.com/in/aman-kanojiya-782263188,https://github.com/AMANKANOJIYA,/image/members/Aman kanojiya.jpg,jpg
Aman Pandey,Sophomore,20je0109@pe.iitism.ac.in,https://www.linkedin.com/in/aman-pandey-a5600a1b9/,https://github.com/Amanp16,/image/members/Aman Pandey.jpeg,jpeg
Ambati Shasank Bhushan,Sophomore,shasank.ambati02@gmail.com,https://www.linkedin.com/in/ambati-shasank-8687b6210/,https://github.com/Shasank-Ambati,/image/members/Ambati Shasank Bhushan.jpeg,jpeg
Aniket Kumar Roy,Sophomore,20je0128@me.iitism.ac.in,https://www.linkedin.com/in/aniket-kumar-roy-5a9180204/,https://github.com/Aniketkumarroy,/image/members/Aniket Kumar Roy.jpg,jpg
Arjun P S,Sophomore,20je0181@ece.iitism.ac.in,https://www.linkedin.com/in/arjun-ps-837a38150/,https://github.com/Arjun-P-S,/image/members/Arjun P S.jpeg,jpeg
Ayushman Tiwari,Sophomore,20je0241@me.iitism.ac.in,https://www.linkedin.com/in/ayushman-tiwari-9757871b9/,https://github.com/Ayuschmannov,/image/members/Ayushman Tiwari.jpg,jpg
Dhruv Shah,Sophomore,20je0326@mech.iitism.ac.in,https://www.linkedin.com/in/dhruv-shah-b8b480167/,https://github.com/dhruvsh-1729?tab=repositories,/image/members/Dhruv Shah.jpg,jpg
Harshit Sharma,Sophomore,20je0409@cse.iitism.ac.in,https://www.linkedin.com/in/harshit-s-025a91134/,https://github.com/Zhedac,/image/members/Harshit Sharma.jpeg,jpeg
Herambh Dakshinamoorthy,Sophomore,herambhd03@gmail.com,www.linkedin.com/in/herambhd,https://github.com/herambh03,/image/members/Herambh Dakshinamoorthy.png,png
Karan Soni,Sophomore,20je0960@ee.iitism.ac.in,https://www.linkedin.com/in/karansoni1072002/,https://github.com/karansoni1072002,/image/members/Karan Soni.jpeg,jpeg
Kshma Singh,Sophomore,20je0496@ee.iitism.ac.in,inkedin.com/in/kshma-singh-a5a4331bb/,https://github.com/Kshma29,/image/members/Kshma Singh.jpeg,jpeg
Muntaba Khan,Sophomore,20je0591@mech.iitism.ac.in,https://www.linkedin.com/in/muntaba-khan-a48308201,https://github.com/Muntabakhan,/image/members/Muntaba Khan.jpeg,jpeg
Niyati Madaan,Sophomore,20je0645@mme.iitism.ac.in,https://www.linkedin.com/in/niyati-madaan-6b3319200,https://github.com/niyatimadaan,/image/members/Niyati Madaan.jpeg,jpeg
Piyush Kumar Satpathy,Sophomore,piyushkumarsatpathy@gmail.com,https://www.linkedin.com/in/piyush-kumar-satpathy-3a93a01b8/,https://github.com/Piyush-ops962,/image/members/Piyush Kumar Satpathy.jpg,jpg
Prachi Singh,Sophomore,20je0694@mech.iitism.ac.in,https://www.linkedin.com/in/prachi-singh-861868210,https://github.com/prachisingh25,/image/members/Prachi Singh.jpg,jpg
Pranay Pandey,Sophomore,pranaypandeyofficial@gmail.com,https://www.linkedin.com/in/pranay-pandey-ba1a11210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsAIKtKSmQcunjqO8TFUlQQ%3D%3D,https://github.com/Pranay-Pandey,/image/members/Pranay Pandey.jpeg,jpeg
Prasanth Tolety,Sophomore,20je1031@ece.iitism.ac.in,https://www.linkedin.com/in/prasanth-tolety-611986205/,https://github.com/Prasanth-Tolety,/image/members/Prasanth Tolety.jpeg,jpeg
Priyanshu Singh,Sophomore,priyanshusingh302@gmail.com,https://www.linkedin.com/in/priyanshu-singh-b9a396191/,https://github.com/priyanshusingh302,/image/members/Priyanshu Singh.jpg,jpg
Saksham Dwivedi,Sophomore,20je0836@pe.iitism.ac.in,https://www.linkedin.com/in/saksham-dwivedi/,https://github.com/augsaksham,/image/members/Saksham Dwivedi.jfif,jfif
Sakshi Dwivedi,Sophomore,sakshidwivedi13@gmail.com,https://www.linkedin.com/in/sakshi-dwivedi-36bbb11b9/,https://github.com/sakshi1313,/image/members/Sakshi Dwivedi.jpeg,jpeg
Satyavrat Mishra,Sophomore,20je0874@mech.iitism.ac.in,https://www.linkedin.com/in/satyavrat-mishra-391828218,https://github.com/Satyavrat14,/image/members/Satyavrat Mishra.jpg,jpg
Shashvat Jain,Sophomore,20je0897@ee.iitism.ac.in,https://www.linkedin.com/in/shashvat-jain-847089210/,https://github.com/Shashvat-Jain,/image/members/Shashvat Jain.jpeg,jpeg
Shashwat Srivastava,Sophomore,akshatsrivastava112@gmail.com,http://www.linkedin.com/in/shashwat-srivastava-44a937208,https://github.com/Shashwat112,/image/members/Shashwat Srivastava.png,png
Shobhit Kumar,Sophomore,shobhitkumar43@gmail.com,https://www.linkedin.com/in/shobhitkumar374/,https://github.com/Shobhit374,/image/members/Shobhit Kumar.jpg,jpg
Shreyansh Jain,Sophomore,20je0924@mech.iitism.ac.in,https://www.linkedin.com/in/shreyansh-jain-34b2271b2/,https://github.com/sudoshreyansh/,/image/members/Shreyansh Jain.jpg,jpg
Soumya Shree,Sophomore,20je0967@cve.iitism.ac.in,https://www.linkedin.com/in/soumya-shree-72b548205/,https://github.com/soumyashree04,/image/members/Soumya Shree.jpg,jpg
Syed Areeb Ahmad,Sophomore,areebsyed237@gmail.com,https://www.linkedin.com/in/syed-areeb-b15b22176,https://github.com/areebsyed237,/image/members/Syed Areeb Ahmad.jpg,jpg
Tanishq Chaudhary,Sophomore,20je1015@ece.iitism.ac.in,https://www.linkedin.com/in/tanishq-chaudhary-1018241b1/,https://github.com/Tanishq30052002,/image/members/Tanishq Chaudhary.jpg,jpg
Tanishq Mittal,Sophomore,20je1017@ee.iitism.ac.in,https://www.linkedin.com/in/tanishq-mittal-b5b60b201/,https://github.com/ChochuBaba,/image/members/Tanishq Mittal.jpeg,jpeg
Udbhav Sharma,Sophomore,20je1034@ece.iitism.ac.in,https://www.linkedin.com/in/udbhav-sharma-9b10b5201/,https://github.com/udbhavsharma1112,/image/members/Udbhav Sharma.jpg,jpg
Yash Sati,Sophomore,st.yashsati21@gmail.com,https://www.linkedin.com/in/yash-sati-9827a4210/,https://github.com/YashSati,/image/members/Yash Sati.jpeg,jpeg`;

let output = csv.split('\n').map(row => {
    row = row.split(',');
    return {
        name: row[0],
        position: row[1],
        image: row[5],
        linkedin: row[3],
        github: row[4],
        email: row[2]
    }
});

console.log(JSON.stringify(output));