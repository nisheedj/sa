# Sapient Code Exercise

To start with the application, first download the zip file or clone this repository.


Next install all the dependencies required for the application using

```
npm install
```

Make sure that gulp and its CLI are loaded globally using

```
npm install -g gulp gulp-cli
```

Once all the dependencies have been installed, run

```
gulp server
```

This would load the application at `localhost` on port `3000`.

The application uses browserSync and can be tested simultaneously on multiple browsers.

### Assumptions made

* The application is assumed to be stateless, i.e browser refresh would reset the cart to original state. All the actions are done by manipulating variables and not writing them to `localstorage`.

* Multiple coupons may be tried by the user but only one coupon is applied at a time.
* All links that do not have a defined behaviour are left blank.
* Have restricted the item quantity to be added to `10`.
* Minimalistic validations have been done for testing quantity.
* Adding item to wishlist by clicking `SAVE FOR LATER` adds the item to a wishlist array, the contents of which are logged to the console. Ideally this would be stored to the profile in database.

### Coupons available

There are two coupons that can be used.

* `JF10` which applies $10 discount.
* `JF20` which applies $20 discount.


