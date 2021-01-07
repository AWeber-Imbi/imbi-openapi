import PropTypes from "prop-types"
import React, {useContext} from 'react'
import {Route} from "react-router-dom"
import {useTranslation} from 'react-i18next'

import {Error} from "../"
import {SettingsContext} from '../../contexts'
import {setDocumentTitle} from "../../utils"
import {Sidebar} from '../../components'
import {User} from "../../schema"

import {ConfigurationSystems} from "./ConfigurationSystems"
import {CookieCutters} from "./CookieCutters"
import {ProjectTypes} from "./ProjectTypes"

function Admin({user}) {
  const {t} = useTranslation()
  const settings = useContext(SettingsContext)
  setDocumentTitle(settings, t("admin.title"))
  if (user.permissions.includes("admin") !== true)
    return (<Error>{t("common.accessDenied")}</Error>)
  return (
    <div className="flex-auto flex flex-row">
      <Sidebar title={t("admin.title")}>
        <Sidebar.Section name={t("admin.sidebar.settings")} open={true}>
          <Sidebar.MenuItem value={t("admin.configurationSystems.collectionName")} to="/ui/admin/configuration-systems" icon="fas box" />
          <Sidebar.MenuItem value={t("admin.cookieCutters.collectionName")} to="/ui/admin/cookie-cutters" icon="fas cookie" />
          <Sidebar.MenuItem value="Data Centers" to="/ui/admin/data-centers" icon="fas building" />
          <Sidebar.MenuItem value="Environments" to="/ui/admin/environments" icon="fas tree" />
          <Sidebar.MenuItem value="Orchestration Systems" to="/ui/admin/orchestration-systems" icon="fas cogs" />
          <Sidebar.MenuItem value="Project Fact Types" to="/ui/admin/project-fact-types" icon="fas ruler" />
          <Sidebar.MenuItem value="Project Link Types" to="/ui/admin/project-link-types" icon="fas external-link-alt" />
          <Sidebar.MenuItem value={t("admin.projectTypes.collectionName")} to="/ui/admin/project-types" icon="fas cubes" />
        </Sidebar.Section>
        <Sidebar.Section name={t("admin.sidebar.userManagement")}>
          <Sidebar.MenuItem value="Users" to="/ui/admin/users" icon="fas user-friends" />
          <Sidebar.MenuItem value="Groups" to="/ui/admin/groups" icon="fas users" />
        </Sidebar.Section>
      </Sidebar>
      <div className="flex-auto w-full p-4">
        <Route path="/ui/admin/configuration-systems" component={ConfigurationSystems}/>
        <Route path="/ui/admin/cookie-cutters" component={CookieCutters}/>
        <Route path="/ui/admin/project-types" component={ProjectTypes}/>
      </div>
    </div>
  )
}

Admin.propTypes = {
  match: PropTypes.object,
  user: PropTypes.exact(User)
}

export {Admin}