import type {
	SanityAsset,
	SanityBlock,
	SanityDocument,
	SanityFile,
	SanityGeoPoint,
	SanityImage,
	SanityImageAsset,
	SanityImageCrop,
	SanityImageDimensions,
	SanityImageHotspot,
	SanityImageMetadata,
	SanityImagePalette,
	SanityImagePaletteSwatch,
	SanityKeyed,
	SanityKeyedReference,
	SanityReference,
} from "sanity-codegen";

export type {
	SanityAsset,
	SanityBlock,
	SanityDocument,
	SanityFile,
	SanityGeoPoint,
	SanityImage,
	SanityImageAsset,
	SanityImageCrop,
	SanityImageDimensions,
	SanityImageHotspot,
	SanityImageMetadata,
	SanityImagePalette,
	SanityImagePaletteSwatch,
	SanityKeyed,
	SanityKeyedReference,
	SanityReference,
};

/**
 * Business
 */
export interface Business extends SanityDocument {
	_type: "business";

	/**
	 * Name — `string`
	 *
	 * The name of the business
	 */
	name?: string;

	/**
	 * Description — `text`
	 *
	 * A description of the business
	 */
	description?: string;

	/**
	 * Type — `string`
	 *
	 * The type of business
	 */
	type?:
		| "restaurant"
		| "cafe"
		| "pub"
		| "bakery"
		| "market"
		| "pizza"
		| "miniMart";

	/**
	 * Slug — `slug`
	 *
	 * The slug of the business
	 */
	slug?: { _type: "slug"; current: string };

	/**
	 * Logo — `image`
	 *
	 * The logo of the business
	 */
	logo?: {
		_type: "image";
		asset: SanityReference<SanityImageAsset>;
		crop?: SanityImageCrop;
		hotspot?: SanityImageHotspot;
	};

	/**
	 * Cover — `image`
	 *
	 * The cover image of the business
	 */
	cover?: {
		_type: "image";
		asset: SanityReference<SanityImageAsset>;
		crop?: SanityImageCrop;
		hotspot?: SanityImageHotspot;
	};

	/**
	 * Photos — `array`
	 *
	 * The photos of the business
	 */
	photos?: Array<
		SanityKeyed<{
			_type: "photo";
			asset: SanityReference<SanityImageAsset>;
			crop?: SanityImageCrop;
			hotspot?: SanityImageHotspot;
		}>
	>;

	/**
	 * Locations — `array`
	 *
	 * The locations of the business
	 */
	locations?: Array<
		SanityKeyed<{
			_type: "location";
			/**
			 * Address — `string`
			 *
			 * A human readable address
			 */
			address?: string;

			/**
			 * Coordinates — `geopoint`
			 *
			 * The coordinates of the location
			 */
			coordinates?: SanityGeoPoint;
		}>
	>;

	/**
	 * Contact — `object`
	 *
	 * The contact information of the business
	 */
	contact?: {
		_type: "contact";
		/**
		 * Phone — `string`
		 *
		 * The phone number of the business
		 */
		phone?: string;

		/**
		 * Email — `string`
		 *
		 * The email address of the business
		 */
		email?: string;

		/**
		 * Website — `url`
		 *
		 * The website of the business
		 */
		website?: string;

		/**
		 * Facebook — `url`
		 *
		 * The Facebook page of the business
		 */
		facebook?: string;

		/**
		 * Instagram — `url`
		 *
		 * The Instagram page of the business
		 */
		instagram?: string;
	};
}

export type Documents = Business;
