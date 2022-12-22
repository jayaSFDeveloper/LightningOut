
import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getLeads from '@salesforce/apex/LeadController.getLeads';

export default class LeadViewerLWC extends LightningElement {
    @track leads;
    @track columns = [
        {
            label: 'Lead Name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'text',
            sortable: true
        }
    ];

    @wire(getLeads) wiredLeads({data, error}) {
        if(data) {
            this.leads = data;
        } else if(error) {
            const errEvent = new ShowToastEvent({
                title: 'Leads Not Found.',
                message: error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(errEvent);
        }
    }

}