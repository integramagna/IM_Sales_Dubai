import type { CollectionConfig } from 'payload'

export const UiWebhooks: CollectionConfig = {
  slug: 'ui-webhooks',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'enabled', 'triggerOn', 'updatedAt'],
    group: 'Marketing',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'Webhook URL',
      type: 'text',
      required: true,
    },
    {
      name: 'enabled',
      label: 'Enabled',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'triggerOn',
      label: 'Trigger On',
      type: 'select',
      required: true,
      defaultValue: 'formSubmission',
      options: [
        { label: 'UI Form Submission', value: 'formSubmission' },
      ],
    },
  ],
  timestamps: true,
}
