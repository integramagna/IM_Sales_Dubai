import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { importExportPlugin } from '@payloadcms/plugin-import-export'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { BrandingForm } from './collections/BrandingForm'
import { BrandingPartial } from './collections/BrandingPartial'
import { PackagingForm } from './collections/PackagingForm'
import { PackagingPartial } from './collections/PackagingPartial'
import { UiForm } from './collections/UiForm'
import { UiPartial } from './collections/UiPartial'
import { UiWebhooks } from './collections/UiWebhooks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, BrandingForm, BrandingPartial, PackagingForm, PackagingPartial, UiForm, UiPartial, UiWebhooks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
  importExportPlugin({
    collections: [
      { slug: 'branding-forms' },
      { slug: 'branding-partials' },
      { slug: 'packaging-forms' },
      { slug: 'packaging-partials' },
      { slug: 'ui-forms'},
      { slug: 'ui-partials'},
      // asdfasdf
    ],
  }),
],
})
