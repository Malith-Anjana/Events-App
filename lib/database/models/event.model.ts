import { Document, model, models, Schema } from 'mongoose';

export interface IEvent extends Document {
    _id:string;
    title: string;                        // Required string
    description?: string;                 // Optional string
    location?: string;                    // Optional string
    createdAt: Date;                      // Date with default value
    imageUrl: string;                     // Required string
    startDateTime: Date;                  // Date with default value
    endDateTime: Date;                    // Date with default value
    price?: string;                       // Optional string
    isFree: boolean;                      // Boolean with default value
    url?: string;                         // Optional string
    category: {_id: string, name: string};      // Reference to Category collection
    organizer: { _id: string, firstName: string, lastName:string }   // Reference to User collection
  }

const EventSchema = new Schema({
    title: {type: String, required: true},
    description: { type: String},
    location: { type: String},
    createdAt: { type: Date, default: Date.now},
    imageUrl: { type: String, required: true},
    startDateTime: { type: Date, default: Date.now},
    endDateTime: { type: Date, default: Date.now},
    price: { type: String},
    isFree: { type: Boolean, default: false},
    url: { type: String},
    category: { type: Schema.Types.ObjectId, ref:'Category'},
    organizer: {type: Schema.Types.ObjectId, ref:'User'}

})

const Event = models.Event || model('Event', EventSchema);

export default Event;