// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

type DataFieldTypes =
  | 'Float'
  | 'Boolean'
  | 'Date'
  | 'DateTime'
  | 'Integer'
  | 'Short'
  | 'Counter'
  | 'Duration'
  | 'Number'
  | 'Text'
  | 'Time'
  | 'URL'
  | 'Language'
  | 'Model'
  | 'Guid'
  | 'Object'
  | 'NegativeInteger'
  | 'NegativeNumber'
  | 'NonNegativeInteger'
  | 'NonNegativeNumber'
  | 'NonPositiveInteger'
  | 'NonPositiveNumber'
  | 'PositiveInteger'
  | 'PositiveNumber'
  | 'Email'
  | 'AbsoluteURI'
  | 'RelativeURI';

interface DataModelPrivilege {
  /**
   * A number which represents permission mask (1=Read, 2=Create, 4=Update, 8=Delete, 16=Execute)
   */
  mask: number;
  /**
   * A string which represents the permission scope.
   */
  type: 'self' | 'global' | 'parent' | 'item';
  /**
   * A string which represents the name of the security group where this privilege will be applied e.g. Administrators, Sales etc.
   */
  account?: string;
  /**
   * A string which represents a filter expression for this privilege. This attribute is used for self privileges which are commonly derived from user's attributes e.g. 'owner eq me()' or 'orderStatus eq 1 and customer eq me()' etc.
   */
  filter?: string;
}

interface DataAssociationMappingBase {
  associationType?: 'association' | 'junction';
  associationAdapter?: string;
  associationObjectField?: string;
  associationValueField?: string;
  parentModel?: string;
  parentField?: string;
  childModel?: string;
  childField?: string;
  cascade?: 'delete' | 'none';
  options?: {
    /**
     * The $orderby system query option specifies the order in which items are returned from the service. e.g. $orderby=dateCreated desc
     */
    $orderby?: string;
    /**
     * The $select system query option requests that the service return only the properties, dynamic properties requested by the client e.g. $select=id,name,dateCreated
     */
    $select?: string;
    /**
     * The set of expanded entities can be further refined through the application of expand options, expressed as a semicolon-separated list of system query options.
     */
    $expand?: string;
    /**
     * The value of the $levels system query option is a positive integer to specify the number of levels to expand e.g. $levels=2
     */
    $levels?: string;
    [k: string]: unknown;
  };
  privileges?: DataModelPrivilege[];
}

interface DataFieldValidationBase {
  /**
   * Sets a value which represents the min value.
   */
  minValue?: any;
  /**
   * Sets a value which represents the max value.
   */
  maxValue?: any;
  /**
   * Sets a value which represents the min length.
   */
  minLength?: number;
  /**
   * Sets a value which represents the max allowed length.
   */
  maxLength?: number;
  /**
   * A string which represents a regular expression that validates values of this attribute.
   */
  pattern?: string;
  /**
   * A string which represents a message that is going to be used when pattern validation fails.
   */
  patternMessage?: string;
  /**
   * A string which represents a message that is going to be used when validation fails.
   */
  message?: string;
  /**
   * Defines a validation against a pre-defined data type e.g. PositiveInteger, URL etc
   */
  type?: DataFieldTypes | string;
  /**
   * A string which represents the module path that exports a custom validator e.g. ./validators/custom-validator.js
   */
  validator?: string;
  [k: string]: unknown;
}

interface DataModelConstraintBase {
  /**
   * A string which represents the type of this constraint e.g. unique
   */
  type: 'unique' | string;
  /**
   * A short description for this constraint e.g. Unique identifier field must be unique across different records.
   */
  description?: string;
  /**
   * A collection of fields
   */
  fields: string[];
}

interface DataEventListenerBase {
  /**
   * A string which the name of this event listener e.g. update person user listener
   */
  name?: any;
  /**
   * A string which represents the path of the module that exports this listener. This path may be a relative to execution folder path of a module exists in package modules e.g. ./listeners/add-user-listener or my-module/send-mail-listener
   */
  type: string;
  [k: string]: any;
}

interface DataModelViewBase {
  /**
   * A string which represents the name of this data view e.g. MyCustomView
   */
  name: string;
  /**
   * A string which represents the title of this data view e.g. MyCustomView
   */
  title?: string;
  /**
   * A string which represents a $select system query option which is going to be used for this data view
   */
  select?: string;
  /**
   * A string which represents a $filter system query option which is going to be used by default for this data view
   */
  filter?: string;
  /**
   * A string which represents a $orderby system query option which is going to be used for this data view
   */
  order?: string;
  /**
   * A string which represents a $groupby system query option which is going to be used for this data view
   */
  group?: string;
  /**
   * A positive number which represents a $levels system query option which is going to be used for this data view
   */
  levels?: number;
  /**
   * A collection of fields of this data model view
   */
  fields?: DataFieldBase[];
  privileges?: DataModelPrivilege[];
  [k: string]: any;
}

interface DataFieldBase {
  /**
   * A string which represents a short description of this attribute
   */
  description?: string;
  /**
   * A string which represents the name of this attribute e.g. title, description, dateCreated etc
   */
  name: string;
  /**
   * A string which represents a title for this attribute e.g. Date Created etc
   */
  title?: string;
  /**
   * A string which represents the type of this attribute e.g. Counter, Integer, Number, Text etc
   */
  type?: DataFieldTypes | any;
  /**
   * A number which represents the maximum size for this attribute e.g. the size of a text field etc
   */
  size?: number;
  /**
   * A boolean which indicates whether this attribute is nullable or not.
   */
  nullable?: boolean;
  /**
   * A boolean which indicates whether this attribute is a key column or not.
   */
  primary?: boolean;
  /**
   * An expression which represents the default value for this attribute.
   */
  value?: string;
  /**
   * An expression which represents the calculated value for this attribute.
   */
  calculation?: string;
  /**
   * A boolean which indicates whether this attribute is readonly or not. A readonly value must have a default value or a calculated value.
   */
  readonly?: boolean;
  /**
   * A boolean which indicates whether this attribute is editable or not.
   */
  editable?: boolean;
  /**
   * A boolean which indicates whether this attribute is an indexed column or not.
   */
  indexed?: boolean;
  /**
   * A string which optionally represents the name of this attribute in object mapping. This name may defer from the name of the database field.
   */
  property?: string;
  /**
   * A boolean value which indicates whether this attribute represents an one-to-many or many-to-many association between two models.
   */
  many?: boolean;
  /**
   * A boolean value which indicates whether the associated object(s) will be automatically expanded or not.
   */
  expandable?: boolean;
  /**
   * A boolean which indicates whether this attribute defines an association between two models where child objects are always treated as a part of the parent object.
   */
  nested?: boolean;
  /**
   * An object which defines data association between two models
   */
  mapping?: DataAssociationMappingBase;
  /**
   * An object which represents the validation options of this field
   */
  validation?: DataFieldValidationBase;
  [k: string]: any;
}

interface DataModelBase {
  /**
   * A string which represents the name of this model e.g. Order, Customer, Person etc
   */
  name: string;
  /**
   * A string which represents the title of this e.g. Supplier Orders, Person Followers etc
   */
  title?: string;
  /**
   * A string which represents the model which is inherited by this model e.g. User inherits Account, Person inherits Party etc
   */
  inherits?: string;
  /**
   * A string which represents the model which is implemented by this model e.g. ActionStatusType model implements Enumeration model etc
   */
  implements?: string;
  /**
   * A boolean which indicates whether this model is being upgraded automatically or not. The default value is false.
   */
  sealed?: boolean;
  /**
   * A boolean which indicates whether this model is an abstract model or not. The default value is false.
   */
  abstract?: boolean;
  /**
   * A boolean which indicates whether this model is hidden or not. The default value is false.
   */
  hidden?: boolean;
  /**
   * A string which represents a module path that exports a class which maps this database model e.g. './models/some-model'
   */
  classPath?: string;
  /**
   * A string which holds the database object of this model. If this property is missing the database object's name is the concatenation of the model's name and the keyword 'Base' e.g. UserBase, PersonBase etc
   */
  source?: string;
  /**
   * A string which holds the database object that is going to be used for fetching data. If this property is missing this database object's name is the concatenation of the model's name and the keyword 'Data' e.g. UserData, PersonData etc
   */
  view?: string;
  /**
   * A string which represents the version of the model's schema. This version is going to be used in model upgrade operations e.g. 1.0, 0.1.2 etc
   */
  version: string;
  /**
   * A boolean which indicates whether model data will be cached or not. The default value is none -no caching-. A conditional caching allows developers to control caching mechanism while fetching data.
   */
  caching?: 'none' | 'always' | 'conditional' | string;
  /**
   * A collection of fields that belongs to this data model
   */
  fields?: DataFieldBase[],
  /**
   * A collection of constraints for this data model
   */
  constraints?: DataModelConstraintBase[];
  /**
   * A collection of event listeners that are going to be registered for this data model
   */
  eventListeners?: DataEventListenerBase[];
  /**
   * A collection of views associated with this data model
   */
  views?: DataModelViewBase[];
  /**
   * A set of privileges which define user access to this data model
   */
  privileges?: DataModelPrivilege[];
  /**
   * A collection of entities that are going to be inserted while using data model for the first time
   */
  seed?: any[],
  [k: string]: any;
}

export {
    DataFieldTypes,
    DataAssociationMappingBase,
    DataFieldValidationBase,
    DataFieldBase,
    DataModelPrivilege,
    DataModelConstraintBase,
    DataModelViewBase,
    DataEventListenerBase,
    DataModelBase
}
