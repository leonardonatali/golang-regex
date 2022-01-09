const text = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - rafa.sampaio@yahoo.com`

console.log(text.match(/[\w\.]+@\w+\..*/g));
