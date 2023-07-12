<?php


require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

try {
    $mailer = new PHPMailer();
    $mailer->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mailer->isSMTP();                                            //Send using SMTP
    $mailer->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mailer->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mailer->Username   = 'deleonsalazaru@gmail.com';                     //SMTP username
    $mailer->Password   = 'bzzoerrzlptwjzva';                               //SMTP password
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mailer->Port       = 465;     
    
    $mailer->setFrom('deleonsalazaru@gmail.com', 'Nombre Remitente');
    $mailer->addAddress('developer.badger@gmail.com', 'Nombre Destinatario');

    $mailer->Subject = 'Prueba de correo con PHPMailer';
    $mailer->Body = '
    <html>
                <head>
                    <style>
                        .conetenedor{
                            width: 80%;
                            margin-left:10%;
                            height:60%
                        }
                        h1{
                            width:100%; text-align:center; background:#221e1d; color:#fff
                        }
                        body{
                            background:#000;
                        }
                        .texto{
                            font-weight:400; width:80%; margin-left:10%; color:#000
                        }
                        .tdImagen{
                            width:40%; text-align:right;
                        }
                        .tdTexto{
                            padding-top: 10px;
                            padding-left: 10px;
                            width:57%;
                        }
                        .acomodo{
                            display: flex;
                        }
                        
                        @media (max-width: 1024px) {
                            .conetenedor{
                                width: 100%;
                            }
                            .texto{
                                width:90%;  font-size:18px
                            }
                            .tdImagen{
                                width:100%; text-align:center
                            }
                            .tdTexto{
                                width:100%
                            }
                            .acomodo{
                                display: block;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div style="width:100%;">
                        <div class="conetenedor">
                            <h1 >Market place <b style="color:#F1C40F">B</b><b style="color:#2980B9">A</b></h1>
                            <h2 class="texto"> Buen día proveedor <b>BADGER AUTOMATION</b> tiene una nueva oferta del usuario: <b> Uriel Isaías De León Salazar </b> sobre el producto <b>Fuente de alimentacion</b> </h2>
                            <div class="acomodo">
                                <div class="tdImagen">
                                    <img src="https://ba-mro.mx/Server/Images/T7vQUc4tc3o0ZB6fT9nZ.png"style="width:220px;"/>
                                </div>
                                <div class="tdTexto">
                                    <h3>Precio inicial: <b style="color:#2980B9">$10 MXN</b></h3>
                                    <h3>Precio ofertado: <b style="color:#27AE60">$3 MXN </b></h3>
                                    <a style="padding:10px; font-size:18px; margin:5px; background:#212529; color:#fff; border:none; border-radius:5px; text-decoration:none" href="https://badgerautomation.com/"> Aceptar oferta</a>
                                    <a style="padding:10px; font-size:18px; margin:5px; background:#565e64; color:#fff; border:none; border-radius:5px; text-decoration:none"> Hacer contra oferta </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
    
    ';
    $mailer->isHTML(true);
    if ($mailer->send()) {
        echo 'El correo ha sido enviado correctamente.';
    } else {
        echo 'Error al enviar el correo: ' . $mailer->ErrorInfo;
    }
    
} catch (Exception $e) {
    echo "Error al crear una instancia de la clase PHPMailer: " . $e->getMessage();
}


?>
