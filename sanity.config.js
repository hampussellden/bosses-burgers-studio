import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {CogIcon} from '@sanity/icons'

const signletonActions = new Set(["publish","discardChanges","restore"]);

const singletonTypes = new Set(["settings"]);

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'z0l6o25a',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => 
        S.list()
          .title("Bosses Burgers")
          .items([
            S.listItem()
              .title("Settings")
              .id("settings")
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
              S.divider(),
              ...S.documentTypeListItems().filter(item => !['siteSettings'].includes(item.getId()))
          ])
    }
  ), visionTool()],

  schema: {
    types: schemaTypes,

    templates: (templates) => 
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) => 
      singletonTypes.has(context.schemaType)  
        ? input.filter(({action}) => action && signletonActions.has(action))
        : input,
    }
})
