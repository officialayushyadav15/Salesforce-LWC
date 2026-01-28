# Salesforce LWC – Project Setup & Scratch Org Guide

This README explains how to create a Salesforce LWC project, connect VS Code with a Dev Hub, create and manage scratch orgs, and understand the difference between Dev Hub and Scratch Orgs. It also covers common errors and how to fix them.

---

## 1. Project Creation

To create a new Salesforce project using the **old CLI (sfdx)**:

```
sfdx force:project:create -n "projectname"
```

* `-n` → name of the new project

This command creates the full Salesforce DX project structure.

---

## 2. Authorizing Dev Hub (Connecting VS Code)

To connect VS Code with your **Dev Hub org**, run:

```
sfdx force:auth:web:login -a ayushyadav -d
```

* `-a` → alias name for the org
* `-d` → sets this org as the default Dev Hub

After login, the Dev Hub is linked to your local system.

---

## 3. Dev Hub vs Scratch Org

### Dev Hub

* Main Salesforce org
* Used to create and manage scratch orgs
* One Dev Hub can create multiple scratch orgs

### Scratch Org

* Temporary org
* Source-driven (based on your project code)
* Disposable (can be deleted and recreated anytime)
* Lives for **minimum 1 day** and **maximum 30 days**

Scratch orgs are **not copies of production**.

Sandboxes are copies of production.

**Scratch orgs do not replace sandboxes.**

---

## 4. Scratch Org Expiry

* Scratch orgs live for a maximum of **30 days**
* After expiry, they are deleted automatically
* You must create a new scratch org again

---

## 5. project-scratch-def.json

This file controls how your scratch org is created.

Location:

```
config/project-scratch-def.json
```

To get **sample data** (Accounts and Opportunities), add:

```json
{
  "hasSampleData": true
}
```

* Default value is `false`
* Setting it to `true` avoids creating a blank org

---

## 6. Creating a Scratch Org

### Old CLI Command (sfdx)

```
sfdx force:org:create -a lwcsratchorgone -d 30 -f config/project-scratch-def.json -s
```

Flags explained:

* `-a` → alias name
* `-d` → number of days the org is active (1–30)
* `-f` → scratch definition file path
* `-s` → set this org as default username


### New CLI Command (sf)

```
sf org create scratch --alias lwcsratchorgone --duration-days 30 --definition-file config/project-scratch-def.json --set-default
```

Important notes:

* Do **not** use `sf force:*` commands
* Avoid short flags like `-s` in `sf`
* Always prefer full flag names

---

## 7. Opening the Scratch Org

To open the default scratch org in a browser:

```
sf org open
```

---

## 8. Common Error: "no org configuration for name"

This error happens when the Dev Hub is not set as default.

### Fix

Run:

```
sfdx force:config:set defaultdevhubusername=<DevHubUsername>
```

### Example

```
sfdx force:config:set defaultdevhubusername=salesforce@dev.com
```

This sets the Dev Hub correctly.

---

## 9. Viewing All sf Commands

To see all available `sf` commands:

```
sf commands
```

This lists every command supported by the new Salesforce CLI.

---

## 10. CLI Style Summary

* `sfdx` → old CLI (still works)
* `sf` → new CLI (recommended)
* Never mix `sf` with `force:*`
* Use full flag names with `sf`

---

