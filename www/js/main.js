var db = openDatabase('mydb', '1.0', 'WHDB', 2 * 1024 * 1024);
var msg;

db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS STUDENTS (id INTEGER PRIMARY KEY AUTOINCREMENT, sname, score)');
});

db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM STUDENTS', [], function (tx, results) {
   var len = results.rows.length, i;
     for (i = 0; i < len; i++){
     msg = "<p>" + results.rows.item(i).sname + " - "+ results.rows.item(i).score + "</p>";
     document.querySelector('#status').innerHTML +=  msg;
   }
 }, null);
}
);
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM STUDENTS', [], function (tx, results) {
   var len = results.rows.length, i;
     for (i = 0; i < len; i++){
     names ="<option value="+ results.rows.item(i).id+ ">" + results.rows.item(i).sname + "</option>";
	      document.querySelector('#status2').innerHTML +=  names;
   }
 }, null);
}
);
function myFunction1()
{
var a=document.forms["add"]["inputsname"].value;
db.transaction(function (tx) {
  tx.executeSql('INSERT INTO STUDENTS (id, sname, score) VALUES (NULL, "' + a + '",0)');
 })
     success = "<li>" + a +" has been added.</li>";
     document.querySelector('#addsuccess').innerHTML +=  success;   
}

function delete1()
{
var dn=document.forms["delete"]["status2"].value;
db.transaction(function (tx) {
  tx.executeSql('DELETE FROM STUDENTS WHERE id =  "' + dn + '"');
 });
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM STUDENTS', [], function (tx, results) {
   var len2 = results.rows.length, i;
     for (i = 0; i < len2; i++){
     names ="<option value="+ results.rows.item(i).id+ ">" + results.rows.item(i).sname + "</option>";
	      document.querySelector('#status2').innerHTML =  names;  
   }
 }, null);
}
);
successdelete = "<li> User has has been deleted.</li>";
		  document.querySelector('#successdelete').innerHTML +=  successdelete; 
}
function incorrect(){
db.transaction(function (tx) {
  tx.executeSql('UPDATE STUDENTS SET SCORE = SCORE + 1 WHERE NAME IS TONYA');
 });  
  
}
