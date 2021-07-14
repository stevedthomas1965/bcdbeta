'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
const donerList = require('./routes/donerList');
const plaidLinkToken = require('./quickstart/node/plaidlinktoken.js');
const plaidSetAccessToken = require('./quickstart/node/plaidsetaccesstoken.js');
const createProfile = require('./routes/createProfile');
const prospectList = require('./routes/prospectlist.js');
const updateProfile  = require('./routes/updateprofile.js');
const removeProfile = require('./routes/removeprofile.js');
const createCampaign = require('./routes/createCampaign.js');
const campaignList = require('./routes/campaignlist.js');
const removeCampaign = require('./routes/removecampaign.js');
const updateCampaign = require('./routes/updatecampaign.js');
const GetRules = require('./routes/getrules.js');
const CreateDonation = require('./routes/logdonation.js');
const child2 = require('./routes/child2.js');
const allDoners = require('./routes/donerList.js');
const donationsList = require('./routes/alldonations.js');
const createProspect = require('./routes/createprospect.js');
const recordsList = require('./routes/recordslist.js');
const removeRecord = require('./routes/removerecord.js');
const createGeneralCampaign = require('./routes/createGeneralCampaign.js');
const getGeneralCampaign = require('./routes/getgeneralcampaign.js');
const stripeCheckout = require('./routes/stripecheckout.js');
const createPaymentIntent = require('./routes/createpaymentintent.js');
const nycDonRulesList = require('./routes/nycdonrules.js');
const createRule = require('./routes/createRule.js');
const validateName = require('./routes/validateName.js');
const child5 = require('./routes/child5.js');
const politicalRules = require('./routes/politicalrules.js');
const forms = require('./routes/forms.js');
const child4 = require('./routes/child4.js');
const queryDonerRecords = require('./routes/queryDonerRecords.js');
const child6 = require('./routes/child6.js');
const StripeCustomerToken = require('./quickstart/node/stripeCustomerToken.js');
const StripeAchCharge = require('./routes/stripeAchCharge.js');
const ProspectLastName = require('./routes/prospectLastName.js');
const StripeWebhook = require('./routes/StripeWebhook.js');
const StripeCreateCustomer = require('./routes/stripeCreateCustomer.js');
const StripeGetPrice = require('./routes/stripeGetPrice.js');
const GetProduct = require('./routes/stripeGetProduct.js');
const ProductList = require('./routes/stripeProductList.js');
const CoinbaseCharge = require('./routes/CoinbaseCharge.js');
const CoinbaseWebhook = require('./routes/coinbaseWebhook.js');

var app = express();
console.log('Listening on port: 9000');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/testAPI", testAPIRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donerlist', donerList);
app.use('/plaidlinktoken', plaidLinkToken);
app.use('/createprofile', createProfile);
app.use('/prospectlist', prospectList);
app.use('/updateprofile', updateProfile);
app.use('/removeprofile', removeProfile);
app.use('/newcampaign', createCampaign);
app.use('/campaignlist', campaignList);
app.use('/removecampaign', removeCampaign);
app.use('/updatecampaign', updateCampaign);
app.use('/getrules', GetRules);
app.use('/createdonation', CreateDonation);
app.use('/getproduct', GetProduct);
app.use('/child2', child2);
app.use('/alldoners', allDoners);
app.use('/alldonations', donationsList);
app.use('/createrecord', createProspect);
app.use('/recordslist', recordsList);
app.use('/removerecord', removeRecord);
app.use('/newgeneralcampaign', createGeneralCampaign);
app.use('/generalcampaignlist', getGeneralCampaign);
app.use('/plaidsetaccesstoken', plaidSetAccessToken);
app.use('/create-checkout-session', stripeCheckout);
app.use('/create-payment-intent', createPaymentIntent);
app.use('/allnycoptiona', nycDonRulesList);
app.use('/createrule', createRule);
app.use('/validatename', validateName);
app.use('/child5', child5);
app.use('/child4', child4);
app.use('/child6', child6);
app.use('/politicalrules', politicalRules);
app.use('/forms', forms);
app.use('/donerrecords', queryDonerRecords);
app.use('/stripecustomertoken', StripeCustomerToken);
app.use('/stripeachcharge', StripeAchCharge);
app.use('/prospectlastname', ProspectLastName);
app.use('/stripewebhook', StripeWebhook);
app.use('/stripecreatecustomer', StripeCreateCustomer);
app.use('/stripegetprice', StripeGetPrice);
app.use('/stripeproductlist', ProductList);
app.use('/coinbasecharge', CoinbaseCharge);
app.use('/coinbasewebhook', CoinbaseWebhook);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;