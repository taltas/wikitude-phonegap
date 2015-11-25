
	/**
	 * Release date: 29.07.14
	 */

	var WikitudePlugin = function() {

		/**
		 *  This is the SDK Key, provided to you after you purchased the Wikitude SDK from http =//www.wikitude.com/store/.
		 *  If you're having a trial version, leave this string empty.
		 */
        
        //production key ios
//        this._sdkKey = "iCKIW4X/qsXZsw2R3pYBzI8nEnH53d049D5HfKuKC9VErMfNeYst1FcK3esIJj15XfFUk7JyWi6h3uI4mQHeSpEL2QRBDKUpGA4fCuPQEbej82k8rVqmNc5u8FtimAH0fHFFE91LdpsIuVOtktxgLQoGY3atxbiecgBD/BE4/uVTYWx0ZWRfX+j4epUF7Lrcoj62QfHGGSqpCaPvtyZ/tzPQbpZY5T2ZW2+KWJZSUg8UfpOad7Dmr3y6b+0UNtM8Hc7BG8dHU7Qajm9u6D8QAmN5pAdwhmldHnT5+AfrlsanjmCZBE50B8vG3ViueXGbXmSPqY6ZYZy6xF4J/4IWQl7XhuGKKGUmkIsZI5TrV5KK/pm/PIGpjNwS0VEDMGsB1F9jDlOXnztG5CzaiPByNfQuRtAbRRQ4iaBTrUFRAVkrfhB5a/yZPjl5LgE3iSi1wzPTqrKrqw6QMTog46PWgqrm0tE7kFVHb81xkaouufCpoLAeAwPx8Ug90aVOIqBsjUja3h4RektMAbOuQGXR+5SjuuzvBoGDJV0LpZ+qrClwg56W5aFzQWe3LNUkttCQrP7Ch9YnDClU9xDLBSDmDNM4FfHy65BZnuMlUYr5bFVqablBkgU2YeuPGkp0tDbcDY0vsMeo8QM0wojJEZceXanQSml7MkN3sPtfS62sjxYzlSDYtQ07nnuzekp7leeBsT7p/mTSV+OCNkVe46FuZpsrcUmrFaTdvE3wuBlmQRMCw2bUcJLpRRrq5eVTvVkl"

        //production key android
//        this._sdkKey = "PoMX+CS9M7nrFuUL5BjlWLqzggM2CT2/3dP5HcVwITyEjdPRd6hcUyMneI8RLGs7HQ1k31oceCRjTsVCcM9s7kDEWFxoABMMBjDYgb3ngkIlhuGaYoumgpRv688JGHZQKYimSrrttsTkbY1SVIplZYPKg/U9vkjc8AM5vHledPVTYWx0ZWRfX00FpWBbVKdKaFu+jBob3IFoc3o3Yr4zxMrpMMRZQiPcWcV2mbBd4yxI+mxDWMiBp1sV00ZBTW8Ex5X2odB9yatom9quZMOhetAI1WMvyYrM/92nOdvITodkGro9FOyE+Lou6HmYezUktbFdqHsJ4PBqMrxCCg6m2BxrktzcqtY2ELIyB30iTNQJyd0dqX8QBLQG+dU8JZJa9lVsxK+V6Rh7iOL+mm9tA0298TVpUGI92NxSOPCOhIC34zPc23TjFhwFtotKBlMjeRY/AM92dOdDmOuzuFYJ0v9VLGcHgK4av96HW59aKNRYl6EZbQ74T1BddaEA+QWgnf3QOJj3ztLUHCo/FNApBZgaJVrGvb9cEJVI83UkY0HiFNr7v5WHZdfqNb96UnhiOiVicn4+MSxuclzASq/1k9VQrDqRm5XQDUZHHgiYpjey4o+fn79zYBF2X3aGsoMqd7ut+MX5uFJe36vTnUFpAIl78kAEL0uXLw6gZ67NomQcTBaezasbmVMFhpW2paik73Ywma0HbiXkn7VyVFWffgsVXMPkKG9a4orwEOawRjNpSyspACyEY4GApEOJCwIm"        
        
        //adhoc key
		this._sdkKey = "r+TY5MEwIv7U9NiYpt6u06PpOw2151as8Gb+GxcffVvjQvaQ8qC/XJXoIl+uXtrFoCidnTa9j2ohe8d1A7vsy8lU70aCwfL/b9F5rtQG/+qjeyWlkwur1k33Ve9nzN6mARiMHnqDm3rVzWlfxognot8bfOCM4GfJa90nMS+RejZTYWx0ZWRfX/EZE7Rkxk/qzl51aVqx+gn21UZZF5P+Uy9rGALKnKSjfIY0XT+Di9VsTC3v3PEBSiLHLHCmEnMsac3Uiijgcs4nWJg2D2HPp5wU8d2gCo7p13Ww9bT+2+jh1D3BIjunG6G7w9nPgM2h+Eg3h0XVJpndxxaDPJ+FdiyJRasMKp4BlG6HAnpP0NMf2Zqzrm4hiOK5Zww0UiLk8DJlqlnjnxQKx3kWedgYQV+KeRcrSzS+AFx0+m89oC/sACcBhhuK+kGf4vSa5QFmeBGZZdnuVUq/l221vnKuABC+wwCHDSK/W6D17z58nHEeDsdOCNR7mwUjzp3lZ4BSC0UPGab/5ykQvYoxennoFyuU2Srq6kNW7XfX2xHoWz34JsDJf1GUDAoLdPxZEmpGtpMSp1j7UWOtCrSDvwwo4SvXezCgWXp4v9DPa7WIQt0oP9Wq0ghhtGJQovVMXhnyMOsF5+F3BCwthZ92rxbKLklvd6DuFfroImiuyK6S+goDEojzdkztxDCoBGr/n3pocVorOgO72eeY6QY3k8A17rH0SXdObHek6hb5j1xlk3E=";

        //trial key
// 		this._sdkKey = "uf+O+Bf4yk/+aaP5w6/f6Y30mbKHSannhZaRpy2OFugPALXT8QhzyYpVFLIGwouj9u/NTmhBc0KZKeoNk6bTUfj04rPJiQ3lsxApG1oKCD0VzQb8ykYrEB8hzQreEU5M1fGjeca6lV1RasvHXfbBvsRYmni/VdCZuVV4XIh8+V1TYWx0ZWRfXxq1cZgZlF2A8ckaYI3+YGl1q/7MQF8WcQtFnnzs06gKk6l+XmMbfLbdVylG2fvqcE43GFtpgiuVwR06+egr+PxL249RSnxra2OxyD+tEmTO6mwNp3WOe5U/YFW+IlNgVedxJTL3YGvwr6hmSpZCjoHSxMfLinn9cl4zSwo2dSlBziz6vh1uax18llM52Hn6bgAMwYbCC7caWwdL1mdo3BDsytFtLMpZCYDotYm4Dj1gwmMstz6Vg8/mr447F/1pyH6y0QAdOzmP+Vy/gnsuF7ihPrEQcenlb0rxo31FDfe6MtKMAgjXG9qKZYszglSL+c+2otf9X/q5BZa81SA0HrxZP80qBuwcZey3rbZW46pgynAYOIHETP/BuV0lie/zTvQCadhwVxri7aT9u2hD0xz07TpMarUu8RKTB2uMD8q1ti0XvGo9KcxMI3YPGC8nPC9H6uATfkKYsowFXjJRq/VNOinqsk3owmodogi1N/cj36VrGOntQ/U=";       

		/**
		 *  This variable represents if the current device is capable of running ARchitect Worlds.
		 */
		this._isDeviceSupported = false;


		/**
		 *  The Wikitude SDK can run in different modes.
		 *      * Geo means, that objects are placed at latitude/longitude positions.
		 *      * IR means that only image recognition is used in the ARchitect World.
		 *  When your ARchitect World uses both, geo and ir, than set this value to "IrAndGeo". Otherwise, if the ARchitectWorld only needs image recognition, placing "IR" will require less features from the device and therefore, support a wider range of devices. Keep in mind that image recognition requires a dual core cpu to work satisfyingly.
		 */
		this._augmentedRealityMode = "IR"; // "IR" for image recognition worlds only, "Geo" if you want to use Geo AR only


		/**
		 *  Callbacks that are used during device compatibilty checks.
		 */
		this._onDeviceSupportedCallback = null;
		this._onDeviceNotSupportedCallback = null;


		/**
		 *  Callbacks that are used if an ARchitect World was launched successfully or not.
		 */
		this._onARchitectWorldLaunchedCallback = null;
		this._onARchitectWorldFailedLaunchingCallback = null;
	};


	/*
	 *	=============================================================================================================================
	 *
	 *	PUBLIC API
	 *
	 *	=============================================================================================================================
	 */

	/* Managing ARchitect world loading */

	/**
	 *  Use this function to check if the current device is capable of running ARchitect Worlds.
	 *
	 * @param {function} successCallback A callback which is called if the device is capable of running ARchitect Worlds.
	 * @param {function} errorCallback A callback which is called if the device is not capable of running ARchitect Worlds.
	 */
	WikitudePlugin.prototype.isDeviceSupported = function(successCallback, errorCallback) {

		// Store a reference to the success and error callback function because we intercept the callbacks ourself but need to call the developer ones afterwards
		this._onDeviceSupportedCallback = successCallback;
		this._onDeviceNotSupportedCallback = errorCallback;


		// Check if the current device is capable of running Architect Worlds
		cordova.exec(this.deviceIsARchitectReady, this.deviceIsNotARchitectReady, "WikitudePlugin", "isDeviceSupported", [this._augmentedRealityMode]);
	};

	/**
	 *	Use this function to load an ARchitect World.
	 *
	 * 	@param {String} worldPath The path to an ARchitect world, ether on the device or on e.g. your Dropbox.
	 */
	WikitudePlugin.prototype.loadARchitectWorld = function(worldPath) {

		// before we actually call load, we check again if the device is able to open the world
		if (this._isDeviceSupported) {

			//	the 'open' function of the Wikitude Plugin requires some parameters
			//	@param {String} SDKKey (required) The Wikitude SDK license key that you received with your purchase
			//	@param {String} ARchitectWorldPath (required) The path to a local ARchitect world or to a ARchitect world on a server or your dropbox
			//	@param {String} AugmentedRealityMode (optional) describes in more detail how the Wikitude SDK should be instantiated
			cordova.exec(this.worldLaunched, this.worldFailedLaunching, "WikitudePlugin", "open", [{
				"SDKKey": this._sdkKey,
				"ARchitectWorldPath": worldPath,
				"AugmentedRealityMode": this._augmentedRealityMode
			}]);


			// We add an event listener on the resume and pause event of the application lifecycle
			document.addEventListener("resume", this.onResume, false);
			document.addEventListener("pause", this.onPause, false);

		} else {

			// If the device is not supported, we call the device not supported callback again.
			if (this._onDeviceNotSupportedCallback) {
				this._onDeviceNotSupportedCallback();
			}
		}
	};

	/* Managing the Wikitude SDK Lifecycle */
	/**
	 *	Use this function to stop the Wikitude SDK and to remove it from the screen.
	 */
	WikitudePlugin.prototype.close = function() {

		document.removeEventListener("pause", this.onPause, false);
		document.removeEventListener("resume", this.onResume, false);

		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "close", [""]);
	};

	/**
	 *	Use this function to only hide the Wikitude SDK. All location and rendering updates are still active.
	 */
	WikitudePlugin.prototype.hide = function() {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "hide", [""]);
	};

	/**
	 *	Use this function to show the Wikitude SDK again if it was hidden before.
	 */
	WikitudePlugin.prototype.show = function() {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "show", [""]);
	};

	/* Interacting with the Wikitude SDK */

	/**
	 *	Use this function to call javascript which will be executed in the context of the currently loaded ARchitect World.
	 *
	 * @param js The JavaScript that should be evaluated in the ARchitect View.
	 */
	WikitudePlugin.prototype.callJavaScript = function(js) {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "callJavascript", [js]);
	};

	/**
	 *	Use this function to set a callback which will be invoked when the ARchitect World opens an architectsdk =// url.
	 *	document.location = "architectsdk =//opendetailpage?id=9";
	 *
	 *	@param onUrlInvokeCallback A function which will be called when the ARchitect World invokes a call to "document.location = architectsdk =//"
	 */
	WikitudePlugin.prototype.setOnUrlInvokeCallback = function(onUrlInvokeCallback) {
		cordova.exec(onUrlInvokeCallback, this.onWikitudeError, "WikitudePlugin", "onUrlInvoke", [""]);
	};

	/**
	 *  Use this function to inject a location into the Wikituce SDK.
	 *
	 *  @param latitude The latitude which should be simulated
	 *  @param longitude The longitude which should be simulated
	 *  @param altitude The altitude which should be simulated
	 *  @param accuracy The simulated location accuracy
	 */
	WikitudePlugin.prototype.setLocation = function(latitude, longitude, altitude, accuracy) {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "setLocation", [latitude, longitude, altitude, accuracy]);
	};

	/**
	 *  Use this function to generate a screenshot from the current Wikitude SDK view.
	 *
	 *  @param includeWebView Indicates if the ARchitect web view should be included in the generated screenshot or not.
	 *  @param imagePathInBundleorNullForPhotoLibrary If a file path or file name is given, the generated screenshot will be saved in the application bundle. Passing null will save the photo in the device photo library.
	 */
	WikitudePlugin.prototype.captureScreen = function(includeWebView, imagePathInBundleOrNullForPhotoLibrary, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "WikitudePlugin", "captureScreen", [includeWebView, imagePathInBundleOrNullForPhotoLibrary]);
	};

	/*
	 *	=============================================================================================================================
	 *
	 *	Callbacks of public functions
	 *
	 *	=============================================================================================================================
	 */


	/**
	 *  This function gets called if the Wikitude Plugin reports that the device is able to start the Wikitude SDK
	 */
	WikitudePlugin.prototype.deviceIsARchitectReady = function() {

		// Keep track of the device status
		module.exports._isDeviceSupported = true;

		// if the developer passed in a device supported callback, call it
		if (module.exports._onDeviceSupportedCallback) {
			module.exports._onDeviceSupportedCallback();
		}
	};

	/**
	 *  This function gets called if the Wikitude Plugin reports that the device is not able of starting the Wikitude SDK.
	 */
	WikitudePlugin.prototype.deviceIsNotARchitectReady = function() {

		// Keep track of the device status
		module.exports._isDeviceSupported = false;

		// if the developer passed in a device not supported callback, call it
		if (module.exports._onDeviceNotSupportedCallback) {
			module.exports._onDeviceNotSupportedCallback();
		}
	};

	/**
	 *	Use this callback to get notified when the ARchitect World was loaded successfully.
	 */
	WikitudePlugin.prototype.worldLaunched = function(url) {
		if (module.exports._onARchitectWorldLaunchedCallback) {
			module.exports._onARchitectWorldLaunchedCallback(url);
		}
	};

	/**
	 *	Use this callback to get notified when the ARchitect World could not be loaded.
	 */
	WikitudePlugin.prototype.worldFailedLaunching = function(err) {
		if (module.exports._onARchitectWorldFailedLaunchingCallback) {
			module.exports._onARchitectWorldFailedLaunchingCallback(err);
		}
	};

	/* Lifecycle updates */
	/**
	 *	This function gets called every time the application did become active.
	 */
	WikitudePlugin.prototype.onResume = function() {

		// Call the Wikitude SDK that it should resume.
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "onResume", [""]);
	};

	/**
	 *	This function gets called every time the application is about to become inactive.
	 */
	WikitudePlugin.prototype.onPause = function() {

		// Call the Wikitude SDK that the application did become inactive
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "onPause", [""]);
	};

	/**
	 *	A generic success callback used inside this wrapper.
	 */
	WikitudePlugin.prototype.onWikitudeOK = function() {};

	/**
	 *  A generic error callback used inside this wrapper.
	 */
	WikitudePlugin.prototype.onWikitudeError = function() {};



	/* Export a new WikitudePlugin instance */
	var wikitudePlugin = new WikitudePlugin();
	module.exports = wikitudePlugin;
