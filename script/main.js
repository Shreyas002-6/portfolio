jQuery(function($, undefined) {
 $('#term_demo').terminal(function(command) {
   if (command == 'hello') {
     this.echo("\n1. About Me=> about")
     this.echo("2. Socials => social");
   } 
 
 //  if (command == 'social'){ .  This was wrong. 
   else if (command == 'social'){
     this.echo("\n<--Quick links-->")
     this.echo("mailto:shreyas9822949536@gmail.com")
     this.echo("https://www.github.com/Shreyas002-6")
     this.echo("https://www.linkedin.com/in/shreyas-sawant-268228190")
   }

//   if (command == 'exp'){ .This was wrong. 
   else if (command == 'about'){
     this.echo("\nHi, I'm Shreyas and I like developing softwares, I'm an engineering student and I want to become a software dev.")
     this.echo("Enjoy!")
   }

  else if (command == 'reset'){
	location.reload();
   }


   else {
     if (command !== '') {
       try {
         var result = window.eval(command);
         if (result !== undefined) {
           this.echo(new String(result));
         }
       } catch(e) {
         this.error(new String(e));
       }
     } else {
       this.echo('');
     }
   }
 

 }, {
 greetings: 'Shreyas:~$ Hi, Welcome to my portfolio!',
 prompt: 'start with "hello"> '
 });
});



