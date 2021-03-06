---
id: netdata
title: Netdata
hide_title: true
hide_table_of_contents: false
sidebar_label: Netdata
custom_edit_url: https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md
#description: How do I find you when I cannot solve this problem
#keywords:
#  - docs
#  - docusaurus
#image: https://i.imgur.com/mErPwqL.png
---

# Netdata

[Netdata](https://my-netdata.io/) Real-time performance monitoring, done right!

![amd64](https://img.shields.io/badge/{% if not netdata.amd64 %}untested{% else %}{{ netdata.amd64 }}{% endif %}-amd64-{% if not netdata.amd64 %}inactive{% elif netdata.amd64 == "verified" %}success{% elif netdata.amd64 == "supported" %}informational{% elif netdata.amd64 == "unsupported" %}critical{% endif %}?style=flat) <br />
![arm64](https://img.shields.io/badge/{% if not netdata.arm64 %}untested{% else %}{{ netdata.arm64 }}{% endif %}-arm64-{% if not netdata.arm64 %}inactive{% elif netdata.arm64 == "verified" %}success{% elif netdata.arm64 == "supported" %}informational{% elif netdata.arm64 == "unsupported" %}critical{% endif %}?style=flat) <br />
![armv7](https://img.shields.io/badge/{% if not netdata.armv7 %}untested{% else %}{{ netdata.armv7 }}{% endif %}-armv7-{% if not netdata.armv7 %}inactive{% elif netdata.armv7 == "verified" %}success{% elif netdata.armv7 == "supported" %}informational{% elif netdata.armv7 == "unsupported" %}critical{% endif %}?style=flat) <br />

## Information


**Docker Image:** !!! LINK TO DOCKER IMAGE/ DOCKER HUB !!! <br />
**Current Image Version:** {{ netdata.version }}

## SETUP

### Enabling netdata

#### Command:

**`vlab set netdata.enable True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  enable: True
```

#### Finalising changes:

run: **`vlab update_one service=netdata`**

## FIRST RUN

!!! **DEVELOPERS**: make sure that you include any information that the user requires to get started, below. !!! <br />
!!! Below are some **examples** with headings, and with some **example** instructions !!!

#### ADMINISTRATOR SETUP

Navigate to *https://{{ netdata.domain }}/admin*

Create an account with your desired username; as this is the first user, netdata makes this account the administrator.

### SMTP/ MAIL

1. run **`vlab decrypt`** to decrypt the `vault.yml` file
2. make some changes


#### SMTP Settings
```
smtp:
  host:
  port:
  user:
  pass:
  from_email:
  from_name:
```

3. run **`vlab update_one service=netdata`** to complete the changes


## ACCESS

netdata (HTTPS) link: [https://{% if netdata.domain %}{{ netdata.domain }}{% else %}{{ netdata.subdomain + "." + domain }}{% endif %}/](https://{% if netdata.domain %}{{ netdata.domain }}{% else %}{{ netdata.subdomain + "." + domain }}{% endif %}/)
netdata (HTTP) link: [http://{% if netdata.domain %}{{ netdata.domain }}{% else %}{{ netdata.subdomain + "." + domain }}{% endif %}/](http://{% if netdata.domain %}{{ netdata.domain }}{% else %}{{ netdata.subdomain + "." + domain }}{% endif %}/)

{% if enable_tor %}
Tor link: [http://{{ netdata.subdomain + "." + tor_domain }}/](http://{{ netdata.subdomain + "." + tor_domain }}/)
{% endif %}

## OPTIONS

### HTTPS_ONLY
*Default: False* <br />
*Options: True/False*

#### Command:

**`vlab set netdata.https_only True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  https_only: True
```

##### Finalising changes:

run: **`vlab update_one service=netdata`**

### AUTH
*Default: False* <br />
*Options: True/False*

#### Command:

**`vlab set netdata.auth True`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  auth: True
```

##### Finalising changes:

run: **`vlab update_one service=netdata`**

### DOMAIN
*Default: False* <br />
*NOTE: include the sitename and top level domain suffix. eg. name.com, site.net*

#### Command:

**`vlab set netdata.domain netdata.com`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  domain: netdata.com
```

##### Finalising changes:

run: **`vlab update_one service=netdata`**

### SUBDOMAIN
*Default: netdata* <br />
*NOTE: Periods/ delimiters are not required. eg. 'media' will set the full URL as 'media.{{domain}}'*

#### Command:

**`vlab set netdata.subdomain media`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  subdomain: media
```

##### Finalising changes:

run: **`vlab update_one service=netdata`**

### VERSION
*Default: {{  netdata.version  }}* <br />
*NOTE: Ensure that the version exists*

#### Command:

**`vlab set netdata.version 2.7`**

#### File alteration:

set the appropriate service settings in `settings/config.yml` to true

eg.
```
netdata
  version: 2.7
```

##### Finalising changes:

run: **`vlab update_one service=netdata`**

## Need more help?
Further information regarding services can be found. <br />
General Information can be found in the [documentation](https://vivumlab.com/docs). <br />
Additional assistance can be found on our [Contact Us](https://vivumlab.com/docs/contact) page.
