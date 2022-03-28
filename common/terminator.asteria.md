```ini
[global_config]
  focus = mouse
  suppress_multiple_term_dialog = True
[keybindings]
[profiles]
  [[default]]
    cursor_color = "#aaaaaa"
    show_titlebar = False
    scrollbar_position = hidden
    scrollback_infinite = True
    copy_on_selection = True
[layouts]
  [[default]]
    [[[window0]]]
      type = Window
      parent = ""
    [[[child1]]]
      type = Terminal
      parent = window0
      profile = default
  [[Asteria]]
    [[[child0]]]
      type = Window
      parent = ""
      order = 0
      position = 0:0
      maximised = True
      fullscreen = False
      size = 1920, 1022
      title = docker logs -f --tai ~/p/a/development-environment
      last_active_window = True
    [[[child1]]]
      type = Notebook
      parent = child0
      order = 0
      labels = Integrations, Statistics, ERP, Bank, Transactions, UI, Tests
      last_active_term = 24a6dce2-1e3c-4e51-a0ed-b48c0ee5906d, 3eec600c-ee2f-4e95-8953-726dd7dc9d69, 3e9d7e9e-e9dc-41f3-a9ed-025f789ab724, 7086a686-40d5-4ca7-8888-3202d840dee4, bb8647fe-28ae-45c5-a584-1d58fd9713ff, 3b07c4e7-b393-46ff-a999-c840a3830f37, 9b1b9e17-48d6-412d-a28e-bd74dbe19d14
      active_page = 1
    [[[integrations-layout]]]
      type = HPaned
      parent = child1
      order = 0
      position = 957
      ratio = 0.5002613695765813
    [[[asteria-integration]]]
      type = Terminal
      parent = integrations-layout
      order = 0
      profile = default
      uuid = 24a6dce2-1e3c-4e51-a0ed-b48c0ee5906d
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 asteria-integration_asteria-asteria-integration_1
    [[[integration-gateway]]]
      type = Terminal
      parent = integrations-layout
      order = 1
      profile = default
      uuid = 23595201-0fd1-4dc9-b563-6789789cfee5
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 integration-gateway_asteria-integration-gateway_1
    [[[statistics-layout]]]
      type = HPaned
      parent = child1
      order = 1
      position = 956
      ratio = 0.4997386304234187
    [[[htop - redis]]]
      type = VPaned
      parent = statistics-layout
      order = 0
      position = 492
      ratio = 0.49949238578680205
    [[[htop]]]
      type = Terminal
      parent = htop - redis
      order = 0
      profile = default
      uuid = 83d07fef-088b-463a-8c8f-0c69d26a69aa
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = htop
    [[[redis]]]
      type = Terminal
      parent = htop - redis
      order = 1
      profile = default
      uuid = f481d6b1-c32c-461a-8e80-e07df2d4c69b
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker exec -ti development-environment_asteria-redis_1 bash
    [[[mongodb - stats]]]
      type = VPaned
      parent = statistics-layout
      order = 1
      position = 492
      ratio = 0.5
    [[[docker stats]]]
      type = Terminal
      parent = mongodb - stats
      order = 0
      profile = default
      uuid = 3eec600c-ee2f-4e95-8953-726dd7dc9d69
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = 'docker stats --format "table {{ .Name }}\t{{ .CPUPerc }}\t{{ .MemUsage }}"'
    [[[mongodb]]]
      type = Terminal
      parent = mongodb - stats
      order = 1
      profile = default
      uuid = 68ae334e-2a35-47d6-9503-d5c777d808a0
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker exec -ti development-environment_asteria-database-rs-0_1 mongo
    [[[erp-layout]]]
      type = HPaned
      parent = child1
      order = 2
      position = 956
      ratio = 0.5
    [[[erp-worker]]]
      type = Terminal
      parent = erp-layout
      order = 0
      profile = default
      uuid = 3e9d7e9e-e9dc-41f3-a9ed-025f789ab724
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 erp-worker_asteria-erp-worker_1
    [[[erp-services]]]
      type = VPaned
      parent = erp-layout
      order = 1
      position = 492
      ratio = 0.5
    [[[invoice-service]]]
      type = Terminal
      parent = erp-services
      order = 0
      profile = default
      uuid = 836e2415-015d-427f-b1ca-f74c75c76f5f
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 invoice-service_asteria-invoice-service_1
    [[[voucher-service]]]
      type = Terminal
      parent = erp-services
      order = 1
      profile = default
      uuid = 90e28d67-0555-4291-b251-9e505210d6d2
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 voucher-service_asteria-voucher-service_1
    [[[bank-layout]]]
      type = HPaned
      parent = child1
      order = 3
      position = 956
      ratio = 0.4997386304234187
    [[[bank-worker]]]
      type = Terminal
      parent = bank-layout
      order = 0
      profile = default
      uuid = 85ad69c3-b5f1-4588-96c7-e1809fead0fb
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 bank-worker_asteria-bank-worker_1
    [[[bank-service]]]
      type = Terminal
      parent = bank-layout
      order = 1
      profile = default
      uuid = 7086a686-40d5-4ca7-8888-3202d840dee4
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 bank-service_asteria-bank-service_1
    [[[transaction-service]]]
      type = Terminal
      parent = child1
      order = 4
      profile = default
      uuid = bb8647fe-28ae-45c5-a584-1d58fd9713ff
      directory = /home/iviaks/projects/asteria.k8s/development-environment
      command = docker logs -f --tail=200 transaction-service_asteria-transaction-service_1
    [[[ui-layout]]]
      type = VPaned
      parent = child1
      order = 5
      position = 492
      ratio = 0.49949238578680205
    [[[ui-webapp]]]
      type = Terminal
      parent = ui-layout
      order = 0
      profile = default
      uuid = 8801f7dc-a818-40ff-b419-782868570aed
      directory = /home/iviaks/projects/asteria.k8s/ui/webapp
      command = ""
    [[[ui-admin]]]
      type = Terminal
      parent = ui-layout
      order = 1
      profile = default
      uuid = 3b07c4e7-b393-46ff-a999-c840a3830f37
      directory = /home/iviaks/projects/asteria.k8s/ui/admin
    [[[e2e-tester]]]
      type = Terminal
      parent = child1
      order = 6
      profile = default
      uuid = 9b1b9e17-48d6-412d-a28e-bd74dbe19d14
      directory = /home/iviaks/projects/asteria.k8s/testing/e2e-tester
[plugins]
```
