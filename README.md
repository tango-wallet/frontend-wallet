# Frontend TANGO WALLET

### Link: tangowallet.sitio

> [!CAUTION]
> Ingresar desde mobile, ya que el diseño esta hecho para este

```
-- Login / Register
                    -- Dashboard -
                                 - Leer QR
                                 - Depositar    ->  Generar QR
                                                ->  Generar enlace
                                                ->  Datos de Cuenta
                                                ->  Deposito con Mercado pago - Pronto
                                 - Transferencia
                                                -> Solo ingresamos dos elementos
                                                    -> Monto
                                                    -> Wallet o Alias
```

## Leer QR

![alt text](image.png)

> [!NOTE]
> Esta opción nos permite leer códigos QR con la cámara que se generan a través de `Depositar -> Generar QR`

## Depositar

![alt text](image-1.png)

> [!NOTE]
> Aquí podemos generar códigos QR y enlaces de pago, así como también ver los datos de la cuenta con su respectivo alias y wallet

### Transferir

![alt text](image-3.png)

> [!NOTE]
> Dentro de la opción transferir, podemos realizar transferencias a otras cuentas con solo dos elementos: el alias o wallet y el monto.

### Ejecucion

1. git clone https://github.com/tango-wallet/frontend-wallet.git
2. npm install
3. npm run dev

> Este proyecto pose .ENV y los que debera tener estan en el .env.example
> Tecnologias utilizadas: NextJS 14.x.x , Javascript y Tailwind
