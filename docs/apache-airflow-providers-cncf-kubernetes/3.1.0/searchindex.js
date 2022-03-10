Search.setIndex({docnames:["_api/airflow/providers/cncf/kubernetes/hooks/index","_api/airflow/providers/cncf/kubernetes/hooks/kubernetes/index","_api/airflow/providers/cncf/kubernetes/index","_api/airflow/providers/cncf/kubernetes/operators/index","_api/airflow/providers/cncf/kubernetes/operators/kubernetes_pod/index","_api/airflow/providers/cncf/kubernetes/operators/spark_kubernetes/index","_api/airflow/providers/cncf/kubernetes/sensors/index","_api/airflow/providers/cncf/kubernetes/sensors/spark_kubernetes/index","_api/airflow/providers/cncf/kubernetes/utils/index","_api/airflow/providers/cncf/kubernetes/utils/pod_manager/index","_api/airflow/providers/cncf/kubernetes/utils/xcom_sidecar/index","commits","connections/kubernetes","index","installing-providers-from-sources","operators"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["_api/airflow/providers/cncf/kubernetes/hooks/index.rst","_api/airflow/providers/cncf/kubernetes/hooks/kubernetes/index.rst","_api/airflow/providers/cncf/kubernetes/index.rst","_api/airflow/providers/cncf/kubernetes/operators/index.rst","_api/airflow/providers/cncf/kubernetes/operators/kubernetes_pod/index.rst","_api/airflow/providers/cncf/kubernetes/operators/spark_kubernetes/index.rst","_api/airflow/providers/cncf/kubernetes/sensors/index.rst","_api/airflow/providers/cncf/kubernetes/sensors/spark_kubernetes/index.rst","_api/airflow/providers/cncf/kubernetes/utils/index.rst","_api/airflow/providers/cncf/kubernetes/utils/pod_manager/index.rst","_api/airflow/providers/cncf/kubernetes/utils/xcom_sidecar/index.rst","commits.rst","connections/kubernetes.rst","index.rst","installing-providers-from-sources.rst","operators.rst"],objects:{"airflow.providers.cncf":[[2,0,0,"-","kubernetes"]],"airflow.providers.cncf.kubernetes":[[0,0,0,"-","hooks"],[3,0,0,"-","operators"],[6,0,0,"-","sensors"],[8,0,0,"-","utils"]],"airflow.providers.cncf.kubernetes.hooks":[[1,0,0,"-","kubernetes"]],"airflow.providers.cncf.kubernetes.hooks.kubernetes":[[1,1,1,"","KubernetesHook"]],"airflow.providers.cncf.kubernetes.hooks.kubernetes.KubernetesHook":[[1,2,1,"","api_client"],[1,3,1,"","conn_name_attr"],[1,3,1,"","conn_type"],[1,2,1,"","core_v1_client"],[1,2,1,"","create_custom_object"],[1,3,1,"","default_conn_name"],[1,2,1,"","get_conn"],[1,2,1,"","get_connection_form_widgets"],[1,2,1,"","get_custom_object"],[1,2,1,"","get_namespace"],[1,2,1,"","get_pod_log_stream"],[1,2,1,"","get_pod_logs"],[1,2,1,"","get_ui_field_behaviour"],[1,3,1,"","hook_name"]],"airflow.providers.cncf.kubernetes.operators":[[4,0,0,"-","kubernetes_pod"],[5,0,0,"-","spark_kubernetes"]],"airflow.providers.cncf.kubernetes.operators.kubernetes_pod":[[4,1,1,"","KubernetesPodOperator"],[4,4,1,"","PodReattachFailure"]],"airflow.providers.cncf.kubernetes.operators.kubernetes_pod.KubernetesPodOperator":[[4,3,1,"","BASE_CONTAINER_NAME"],[4,3,1,"","POD_CHECKED_KEY"],[4,2,1,"","await_pod_start"],[4,2,1,"","build_pod_request_obj"],[4,2,1,"","cleanup"],[4,2,1,"","client"],[4,2,1,"","dry_run"],[4,2,1,"","execute"],[4,2,1,"","extract_xcom"],[4,2,1,"","find_pod"],[4,2,1,"","get_or_create_pod"],[4,2,1,"","on_kill"],[4,2,1,"","patch_already_checked"],[4,2,1,"","pod_manager"],[4,2,1,"","process_pod_deletion"],[4,3,1,"","template_fields"]],"airflow.providers.cncf.kubernetes.operators.spark_kubernetes":[[5,1,1,"","SparkKubernetesOperator"]],"airflow.providers.cncf.kubernetes.operators.spark_kubernetes.SparkKubernetesOperator":[[5,2,1,"","execute"],[5,3,1,"","template_ext"],[5,3,1,"","template_fields"],[5,3,1,"","ui_color"]],"airflow.providers.cncf.kubernetes.sensors":[[7,0,0,"-","spark_kubernetes"]],"airflow.providers.cncf.kubernetes.sensors.spark_kubernetes":[[7,1,1,"","SparkKubernetesSensor"]],"airflow.providers.cncf.kubernetes.sensors.spark_kubernetes.SparkKubernetesSensor":[[7,3,1,"","FAILURE_STATES"],[7,3,1,"","SUCCESS_STATES"],[7,2,1,"","poke"],[7,3,1,"","template_fields"]],"airflow.providers.cncf.kubernetes.utils":[[9,0,0,"-","pod_manager"],[10,0,0,"-","xcom_sidecar"]],"airflow.providers.cncf.kubernetes.utils.pod_manager":[[9,4,1,"","PodLaunchFailedException"],[9,1,1,"","PodManager"],[9,1,1,"","PodPhase"],[9,5,1,"","container_is_running"],[9,5,1,"","should_retry_start_pod"]],"airflow.providers.cncf.kubernetes.utils.pod_manager.PodManager":[[9,2,1,"","await_container_completion"],[9,2,1,"","await_pod_completion"],[9,2,1,"","await_pod_start"],[9,2,1,"","container_is_running"],[9,2,1,"","create_pod"],[9,2,1,"","delete_pod"],[9,2,1,"","extract_xcom"],[9,2,1,"","follow_container_logs"],[9,2,1,"","parse_log_line"],[9,2,1,"","read_pod"],[9,2,1,"","read_pod_events"],[9,2,1,"","read_pod_logs"],[9,2,1,"","run_pod_async"]],"airflow.providers.cncf.kubernetes.utils.pod_manager.PodPhase":[[9,3,1,"","FAILED"],[9,3,1,"","PENDING"],[9,3,1,"","RUNNING"],[9,3,1,"","SUCCEEDED"],[9,3,1,"","terminal_states"]],"airflow.providers.cncf.kubernetes.utils.xcom_sidecar":[[10,1,1,"","PodDefaults"],[10,5,1,"","add_xcom_sidecar"]],"airflow.providers.cncf.kubernetes.utils.xcom_sidecar.PodDefaults":[[10,3,1,"","SIDECAR_CONTAINER"],[10,3,1,"","SIDECAR_CONTAINER_NAME"],[10,3,1,"","VOLUME"],[10,3,1,"","VOLUME_MOUNT"],[10,3,1,"","XCOM_CMD"],[10,3,1,"","XCOM_MOUNT_PATH"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,9,10,12,14,15],"00453dc4a2":11,"0080354502":11,"01":11,"0161b5ea2b":11,"02":11,"03":11,"03c4351744":11,"04":[11,15],"042be2e4e0":11,"05":11,"059eda05f8":11,"06":11,"07":11,"08":11,"09":11,"0a0e1af800":11,"0a3ff43d41":11,"0a6850647":11,"0a68588479":11,"0b2":11,"0beta1":11,"0d60d1af41":11,"0ec2774120":11,"1":[0,1,2,3,4,5,6,7,8,9,10,12,14,15],"10":[11,13,15],"10023":11,"10049":11,"10056":11,"10068":11,"10097":11,"10163":11,"10205":11,"10230":11,"10343ec29f":11,"10393":11,"10447":11,"10453":11,"10468":11,"10525":11,"10543":11,"10659":11,"10666":11,"10727":11,"10796":11,"10818":11,"10963":11,"11":[11,14],"11008":11,"11031":11,"11032":11,"11138":11,"11159":11,"11162":11,"11199":11,"1123":4,"11238":11,"11242":11,"11249":11,"11368":11,"11369":11,"11447":11,"11487":11,"11502":11,"11688":11,"11709":11,"11826":11,"11855":11,"12":[11,14],"120":[4,9],"12082":11,"12091":11,"12117":11,"12171":11,"12206":11,"12212":11,"12304":11,"12354":11,"12366":11,"12384":11,"12390":11,"12422":11,"12427":11,"12432":11,"12438":11,"12444":11,"12449":11,"12451":11,"12455":11,"12457":11,"12466":11,"12479":11,"12558":11,"12653":11,"12681":11,"12917":11,"1294e15d44":11,"12955":11,"12c5e5d8a":11,"13":11,"13148":11,"13289":[11,13],"13380":11,"13621":11,"13717":11,"13732":11,"13767":11,"13835":11,"14":11,"14013":11,"14082":11,"14083":[11,13],"14123":11,"14186":[11,13],"14487":11,"14577":[11,13],"14606":11,"14886":11,"14898":[11,13],"15":11,"15137":11,"15165":[11,13],"15236":11,"15316":11,"15373":[11,13],"15388":[11,13],"15393":11,"15490":[11,13],"15492":[11,13],"15507":[11,13],"15576":11,"15638":[11,13],"15667":[11,13],"1571f80546":11,"15755":[11,13],"15787":[11,13],"15942":[11,13],"15991":11,"16":[11,15],"16095":[11,13],"16294":11,"16405":11,"16464":11,"16501":11,"16624":11,"16682":11,"16870":11,"16930":[11,13],"16945":[11,13],"16e7129719":11,"17":11,"17015":11,"17020":11,"17116":11,"17237":11,"17256":11,"17380":11,"17649":[11,13],"17682":[11,13],"17760":[11,13],"17798":11,"17890":11,"17900":11,"17953":[11,13],"18":11,"1806670383":11,"18070":[11,13],"18377":[11,13],"18597":11,"18613":11,"18797":[11,13],"18928":[11,13],"18964":11,"19":11,"19057":11,"19321":11,"19398":[11,13],"19459":[11,13],"19572":[11,13],"19694":[11,13],"19695":[11,13],"19713":[11,13],"19718":[11,13],"19726":[11,13],"19759":11,"19882":11,"1b9e3d1c28":11,"1ccafc617c":11,"1d36b0303b":11,"1e57022953":11,"1e5aa4465c":11,"1fba5402bb":11,"2":[0,1,2,3,4,5,6,7,8,9,10,12,14,15],"20":11,"20031":[11,13],"2020":11,"2021":[11,14],"2022":11,"20226":11,"2037303eef":11,"20523":11,"20565":11,"20571":11,"20573":[11,13],"20574":[11,13],"20575":[11,13],"20576":[11,13],"20596":[11,13],"20608":11,"20614":11,"20654":11,"20753":11,"20765":11,"20951":11,"21":11,"21074":11,"21257":11,"21398":11,"21439":11,"21826":[11,13],"21898":[11,13],"21916":[11,13],"21960":[11,13],"22":11,"221f809c1b":11,"23":11,"24":11,"24c8e4c2d6":11,"25":11,"26":11,"27":11,"28":11,"29":11,"295d66f914":11,"298052fcee":11,"2a1":11,"2f":12,"2f16757e1a":11,"2f2d8dbfaf":11,"2fb5e1d0ec":11,"2fconfig":12,"3":[0,1,2,3,4,5,6,7,8,9,10,12,14,15],"30":11,"31":11,"32971a1a2d":11,"3320e432a1":11,"338b412c04":11,"33f0cd2657":11,"349b0811c3":11,"351fa53432":11,"373c6aa4a2":11,"375d1ca229":11,"37681bca00":11,"37d549bde7":11,"3939e84161":11,"3f59e75cdf":11,"3fd5ef3555":11,"4":[5,7,15],"406f":14,"409":11,"40bf8f28f9":11,"428bd5f228":11,"42e13e1a5a":11,"42eef38217":11,"44480d3673":11,"44d4ae809c":11,"4752fb3eb8":11,"476d0f6e3d":11,"49":14,"49aad025b5":11,"4a73d8f3d1":11,"4b8a1201a":11,"4c9735ff9b":11,"4d3a":14,"4e8f9cc8d0":11,"5":[5,7],"512":14,"5220e4c384":11,"53e6062105":11,"53fc1a9679":11,"54":14,"5413":11,"5569b868a9":11,"5629":11,"589d6dec92":11,"596bc13379":11,"59eb5de78c":11,"5a439e84eb":11,"5b2fe0e740":11,"5c6e":14,"5d6d5a2f7d":11,"6":11,"602abe8394":11,"6230":11,"6377":11,"649335c043":11,"64d2f5488f":11,"6542":11,"6610":11,"6674":[11,14],"6678":11,"6682":11,"6708":11,"6714":11,"6792":11,"6817":11,"6877":11,"6889a333cf":11,"68e4c4dcb0":11,"6c37e47cf6":11,"6c39a3bf97":11,"6c3a67d4fc":11,"6cf76d7ac0":11,"6d7a70b88":11,"7163":11,"719ae2bf62":11,"7222f68d37":11,"7231":11,"7287":11,"7292":11,"7295":11,"7330":11,"7338":11,"733bec9a04":11,"7395":11,"73d2b720e0":11,"7412":11,"746ee587da":11,"7506":11,"7517":11,"763b40d223":11,"76ed2a49c6":11,"7808be7ffb":11,"7825":11,"7825be50d8":11,"7825e8f590":11,"7875":11,"7a560ab6d":11,"7c206a82a6":11,"7c8b71d201":11,"7ca0b6f121":11,"7d24b088cd":11,"7daebefd15":11,"7edfac957b":11,"8":11,"80":15,"807ad32ce5":11,"809b4f9b18":11,"83c037873f":11,"83f8e178ba":11,"840799d559":11,"840ea3efb9":11,"853576d901":11,"854b70b904":11,"85a18e13d9":11,"85b2ccb0c5":11,"8640fb6c10":11,"866a601b76":11,"872b1566a1":11,"87f408b1e7":11,"8807":11,"8829":11,"8886":11,"8891":11,"8898":11,"88bdcfa0df":11,"88c1603060":11,"8978":11,"8984":11,"8985df0bfc":11,"8b1":11,"8bd15ef634":11,"8c42cf1b00":11,"8cd2be9e16":11,"8d8d072289":11,"8ec4":14,"9":4,"9079":11,"90c1505686":11,"91a64db505":11,"92585ca4cb":11,"9290":11,"9468":11,"94d3ed61d6":11,"9549274d11":11,"9550":11,"967930c0cb":11,"9686":11,"96f834389e":11,"9705":11,"97428efc41":11,"97496ba2b4":11,"9784":11,"97a429f9d0":11,"9895":11,"9906":11,"997f7d0beb":11,"9985":11,"9b39f24780":11,"9c94b72d44":11,"9cbd7de6d1":11,"9d6ae609b6":11,"9e089ab895":11,"case":[11,13],"class":[11,13,15],"default":[1,4,10,11,15],"do":[4,9,10,11,13,14],"enum":13,"final":[4,9,13],"function":[7,11],"import":[11,13,14,15],"int":[4,9,10],"long":9,"new":11,"public":15,"return":[1,4,9,13,15],"static":[1,10,11],"super":11,"switch":11,"transient":9,"true":[4,9,10,11,12,13,15],"var":4,"while":[4,7,10,15],A:4,But:9,By:[14,15],For:[1,4,5,7,11,12,13,14,15],If:[4,9,13,14,15],In:[12,13,15],It:[13,14,15],One:13,The:[1,4,5,7,12,13,14,15],Then:15,There:[12,14],These:13,To:[14,15],With:[13,15],_build_find_pod_label_selector:13,_extract_xcom:13,_get_pod_identifying_label_str:13,_get_ti_pod_label:13,_hook:11,_oper:11,_sensor:11,_task_statu:13,_try_numbers_match:13,a0821235fb:11,a159ae828f:11,a888198c27:11,a9ac2b040b:11,abil:[11,13],abl:[4,15],about:[1,5,7,11,13,14],abov:[1,14],ac2f72c98d:11,access:15,accord:11,account:4,accumul:13,act:15,actual:13,ad:[11,13],add:[1,4,10,11,13,15],add_xcom_sidecar:10,addition:13,ae7cb4a1e2:11,aeea71274d:11,affin:[4,11,13,15],after:[11,13],again:13,aip:11,airflow:[12,14,15],airflow_conn_kubernetes_default:12,airflowexcept:[4,9,13],aka:14,all:[4,10,11,12,13,15],allow:[11,13,15],almost:15,alongsid:15,alpin:15,alreadi:[4,14],already_check:4,also:[4,13,14,15],alwai:4,amazon:11,an:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],anew:13,ani:[4,14],annot:4,apach:[14,15],apache_airflow_providers_cncf_kubernet:14,api:[1,5,7,11,13,15],api_cli:1,api_group:[5,7],api_vers:[5,7],apiexcept:11,append:7,appli:[4,11,13],applic:[5,7],application_fil:5,application_nam:7,apply_default:[11,13],april:11,ar:[4,12,13,14,15],arg:[11,15],argument:[4,11,13,15],asc:14,assig:11,assign:11,asynchron:9,attach:[4,10,13],attach_log:7,attempt:13,attribut:[4,11],augment:11,august:11,author:[4,15],auto:[11,13],autoapi:11,autom:11,automat:[11,13],avail:[11,13,14,15],await:13,await_container_complet:[9,13],await_pod_complet:[9,13],await_pod_start:[4,9,13],b0b2591071:11,b2045d6d1d:11,b2a28d1590:11,b2c66e45b7:11,b40dffa085:11,b4770725a3:11,b61225a885:11,b8d06e812a:11,b916b75079:11,b93b6c5be3:11,ba4b:14,back:11,backcompat:11,backport:11,backward:11,bar:15,base:[1,4,5,7,9,13],base_container_nam:4,basehook:1,baseoper:[4,5],basesensoroper:7,bash:[14,15],bash_command:15,bashoper:15,basi:13,batch:11,bb5602c652:11,bbc627a3da:11,bc4bb30588:11,bd90136aaf:11,be421a6b07:11,be75dcd39c:11,becaus:13,been:13,befor:[11,13],behaviour:1,behind:4,belong:14,below:14,beta:15,better:11,bf5f452413:11,bin:14,binari:14,bit:13,black:11,blob:[5,7],block:10,bodi:1,bool:[4,7,11],broken:11,bst:14,bug:11,bugfix:[11,13],buggfix:11,build:[11,14],build_pod_request_obj:[4,11,13],built:11,bump:11,c02a3f59e4:11,c2db0dfeb1:11,c34ef853c8:11,c8b86e69e4:11,c:[11,13,15],ca4238eb4d:11,ca6c210b7d:11,cab86d80d4:11,cach:[1,4,11,13],cached_properti:11,call:[11,13,15],can:[4,11,13,14,15],candid:11,cannot:4,caus:[11,13],cb73053211:11,cba51d49e:11,cbf8001d76:11,cd546b664f:11,cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f:14,cde1:14,cdec301254:11,certif:14,certifi:14,cf141506a2:11,chang:11,changelog:11,chapter:14,charact:[4,11],chart:11,check:[1,4,7,9,11,13,14],checksum:14,choos:14,claim_nam:15,clarifi:[11,13],clean:4,cleanup:[4,11,13],clearli:13,client:[1,4,9,12,13,15],client_configur:1,cluster:[1,4,5,7,13],cluster_context:[1,4,9,11,13],cmd:[4,15],cncf:[14,15],coalesc:[11,13],code:[13,14],com:[4,5,7,14],come:11,comma:4,command:[11,15],comment:11,commit:11,common:[11,13],compat:11,complet:[4,7,10,13],compon:[12,13],concept:9,config:[1,4,11,12,13,15],config_fil:[1,4,15],config_map_ref:15,configmap:4,configur:[1,4,11,13,15],conn_id:1,conn_name_attr:1,conn_typ:1,connect:[1,5,7,9,11,13],consid:[4,15],construct:[13,15],constructor:11,contain:[1,4,9,10,13,14],container_is_run:9,container_nam:[9,13],container_port:15,container_status:[11,13],context:[4,5,7,11,13,15],control:13,conveni:15,convert:13,core:[11,13],core_v1_cli:1,corev1api:13,correct:[11,13,14,15],correctli:[11,13],coverag:11,crd:1,creat:[1,4,5,9,11,13,14,15],create_custom_object:1,create_labels_for_pod:13,create_new_pod_for_oper:13,create_pod:[9,13],create_pod_launch:13,create_pod_request_obj:13,credenti:15,cross:11,cryptographi:13,curl:14,current:4,custom:[1,4,11,12,13,15],custom_resource_definit:5,cx:15,d02ded65ea:11,d200:11,d202:11,d204:11,d32fe78c0d:11,d3cc67aa7a:11,d48b4e0caf:11,d4c4db8a18:11,d56e7b56bb:11,d56ff765e1:11,d7de:14,d84a52dc8f:11,d94fa37830:11,d9567eb106:11,d:14,da9210e89c:11,dag:[11,13,15],data:[4,10,11],db:13,de3b1e687b:11,deal:13,debian:15,debug:[11,13],decemb:11,declar:11,decor:[11,13],decoupl:[11,13],default_arg:11,default_conn_nam:1,defin:[1,5,7,11],definit:[1,4,15],delai:11,delet:[4,9,11],delete_pod:[9,11],dep:14,depend:[11,13,15],deprec:[11,13],deprecationwarn:[11,13],deriv:[4,5,7],describ:14,descript:[11,13],dest:14,detail:[5,7,11,14],detect:11,determin:[7,9],dev0:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],dev:11,di:4,dict:[1,4,11],dictionari:[4,5],did:13,didn:13,diff:14,differ:[12,13,14],directli:13,directori:14,disabl:13,discoveri:11,disktyp:15,distribut:14,dn:4,dnspolici:4,do_xcom_push:[4,15],doc:[5,7,9,11],docker:[4,11,15],dockerhub:15,docstr:[11,13],document:[11,13,15],doe:[4,13],doesn:13,domain:15,don:[4,13],done:[10,13],down:14,download:14,driver:[7,11],drop:14,dry:15,dry_run:[4,11,13,15],dry_run_demo:15,due:[11,13],dump:11,duplic:[11,13],dynam:[11,15],e07e831946:11,e08a:14,e3f96ce7a8:11,e63417553f:11,e742ef7c70:11,e7bb17aeb8:11,e:13,ecf4:14,echo:[14,15],ecr:15,eee4e30f2c:11,ef037e7021:11,either:[5,13],element:4,empti:[4,11,12,13],enabl:[4,11,12,13,15],encapsul:13,encod:12,enforc:11,engin:[4,15],ensur:[4,15],entri:11,entrypoint:4,env:15,env_from:4,env_var:4,environ:[4,11,12,13],equal:15,equival:15,error:[9,11,13],escap:11,essenti:14,etc:[13,15],even:[11,15],event:[4,9,11,13],everywher:11,examin:9,exampl:[11,12,13,14,15],example_dag:[11,15],example_kubernet:[11,15],excepion:11,except:[4,9],exclud:4,execut:[4,5,13],executor:15,exeuction_d:[11,13],exist:[4,13],exit:[9,10],expect:4,experiment:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],expos:4,ext:11,extra:[1,11,13],extra__kubernetes__in_clust:[1,12],extra__kubernetes__kube_config:[1,12],extra__kubernetes__kube_config_path:[1,12],extra__kubernetes__namespac:12,extract:13,extract_xcom:[4,9,13],f1fd3e2c45:11,f200bb1977:11,f3521fb0e3:11,f3e87c5030:11,f4a460:5,f7410dfba2:11,f77417eb0d:11,f82ad452b0:11,f9eab1c185:11,f:11,face:11,fail:[7,9,11,13],failur:[4,11,13,15],failure_st:7,fals:[4,7,9,13],fdd9b6f65b:11,fe682ec3d3:11,featur:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15],field:[1,11,12,13],file:[1,4,5,11,13,14,15],filter:[11,13],final_st:[11,13],find:[4,13],find_pod:[4,13],fingerprint:14,first:13,fit:[11,13],fix:11,flynt:11,folder:14,follow:[9,13,14,15],follow_container_log:[9,13],foo:15,form:[1,11,15],format:[11,12],formerli:13,formmatt:11,forward:13,found:13,foundat:14,friendli:11,from:[1,4,9,10,11,12,13,15],full:4,full_pod_spec:[4,11,15],fulli:4,further:[11,15],g:13,gcp:11,gcr:15,gener:[4,11,13,15],get:[1,4,11,13,14],get_conn:1,get_connection_form_widget:1,get_custom_object:1,get_log:[4,15],get_namespac:1,get_or_create_pod:[4,13],get_pod_log:1,get_pod_log_stream:1,get_template_context:[4,5],get_ui_field_behaviour:1,ghost:4,github:[5,7],given:4,gkestartpodoper:[4,11,15],gmail:14,goal:13,good:14,googl:[4,15],googlecloudplatform:[5,7],gpg:14,grace:4,grace_period_second:11,grammar:11,group:[1,4,5,7,11,13],guid:[4,11,14],gz:14,ha:10,handl:[10,13,15],handle_pod_overlap:13,harvest:13,hash:11,have:[5,7,11,13,15],head:11,header:11,hello:15,helm:11,helper:9,here:9,high:11,hint:[11,13],hoc:11,hook:[2,11,13],hook_nam:1,host:[4,15],hostnetwork:4,how:[4,14],howev:13,http:[5,7,9,14,15],hub:4,i:14,id:[4,5,14],identifi:4,ignor:[4,11,13],imag:[4,11],image_pull_polici:[4,11,13],image_pull_secret:[4,15],implement:[11,13],improv:11,in_clust:[1,4,9,11,12,13,15],includ:[4,11],include_try_numb:13,inclus:13,incorrect:11,increas:11,indefinit:13,indic:[9,13,14],individu:[11,13,15],inform:[1,4,9,11,13,15],init:[4,15],init_contain:[4,15],init_container_volume_mount:15,init_environ:15,initi:[4,13],inject:4,insert:12,insid:12,instal:11,instanc:[4,13,15],instead:[11,13],instruct:14,integr:11,intellij:11,interact:9,interrupt:4,invok:13,io:[5,7,9,15],is_delete_operator_pod:[4,11,15],isn:4,issu:[11,13],issuer:14,its:[4,13],januari:11,jinja:[4,5,11,13],job:[11,13,15],json:[4,5,11,12,13,15],juli:11,june:11,just:12,k8:[5,7,9,11,13,15],k8sexec:11,k8sexecutor:11,k8spodop:11,k8spodoper:11,k:15,ka:14,kaxil:14,kaxilnaik:14,keep:11,kei:[14,15],kept:15,key1:15,key2:15,kill:[4,9],know:14,kpo:[11,13],kube:[4,11,12,15],kube_cli:9,kube_config:12,kubeconfig:[1,11,12,15],kubectl:15,kubepodoper:[11,13],kubernet:14,kubernetes_conn_id:[1,5,7],kubernetes_default:[1,5,7,12],kubernetes_pod:[2,3,15],kuberneteshook:[1,11,13],kubernetespod:[11,13],kubernetespodoper:[4,9,10,11,12],kubernetespodoperat:[11,13],kubernetspodoper:[11,13],kwarg:[4,5,7,9,11,13],l:14,la:14,label:[4,11,13,15],label_selector:15,lack:11,languag:15,larg:4,later:13,latest:11,launch:[4,9,11,13,15],launcher:[11,13],lazi:11,lazili:[11,13],least:13,leav:[4,12,13],left:[13,14],length:11,let:[9,11],level:[11,13,15],librari:[11,13],libyaml:[11,13],lifecycl:9,like:[13,15],line:[9,11,13],link:[11,14],list:[4,11,13],load:11,local:14,locat:[12,15],log:[1,4,7,9,11,13],log_events_on_failur:4,logger:[11,13],logging_mixin:9,loggingmixin:9,logic:[9,13],logo:11,longer:13,look:[4,5,7,15],loop:9,lose:9,lower:13,ls:14,machin:12,made:14,magic:11,mai:13,main:[4,5,14],make:[11,13],manag:[11,13,14],mani:13,manifest:15,manual:13,map:[11,13],map_index:[11,13],mark:[12,15],markdown:11,markdownlint:11,match:[11,14],match_express:15,matter:15,md003:11,md:[5,7],mean:13,mess:11,messag:9,meta:11,metadata:4,method:[4,5,11,15],might:9,migrat:13,mirror:14,misc:11,miss:[11,13],misspel:11,mkdir:15,mktemp:14,model:[4,5,9,15],modul:11,monitor:[4,9,11,13],monitor_pod:13,month:11,more:[1,4,5,7,11,13],most:14,mount_fil:15,mount_path:15,move:[11,13],multipl:11,multiprocess:4,must:[13,15],mutat:13,mypi:11,naik:14,name:[1,4,7,11,13,15],namespac:[1,4,5,7,11,12,13,15],nativ:[11,15],necessari:13,necessarili:9,need:[4,9,13,15],nest:13,network:4,next:[11,13],node_affin:15,node_selector:[4,11,13],noinspect:11,non:4,none:[1,4,5,7,9,11,13,14,15],note:[11,12],novemb:11,now:[11,13],o:14,object:[1,4,5,7,11,13],occur:[4,13,15],octob:11,offici:14,on_kil:[4,11],onc:[1,14],one:[4,11,13,14],onli:[4,13,15],oper:[2,7,11,13],optim:15,option:[1,4,5,7,9,11,13,15],orchestr:[13,15],order:[1,4,13,15],org:14,origin:14,other:[4,9,13,15],otherwis:[9,13,15],our:11,out:[4,11,13,15],overrid:[4,7,11,13],owner:14,p:15,package_nam:14,package_vers:14,page:[11,14],param:[4,11,13],paramet:[1,4,5,7,9,11,15],pars:[9,11,13],parse_log_lin:9,part:13,pass:[11,13,15],password:15,past:12,patch_already_check:[4,13],path:[1,4,5,11,12,15],pend:[9,13],per:11,period:4,permit:4,persistent_volume_claim:15,persistentvolum:4,pgp:14,pgpk:14,pgpv:14,phase:[9,13],pip:[11,14],pleas:14,plu:4,plural:1,pod:[1,4,7,9,10,11,13],pod_affin:15,pod_affinity_term:15,pod_checked_kei:4,pod_is_run:13,pod_launch:[11,13],pod_manag:[2,4,8,13],pod_mutation_hook:[11,13],pod_nam:1,pod_not_start:13,pod_request_obj:4,pod_runtime_info_env:4,pod_task_xcom_result:15,pod_templ:13,pod_template_fil:[4,11,15],poddefault:10,podlaunch:11,podlaunchfailedexcept:9,podmanag:[9,11,13],podphas:[9,13],podreattachfailur:4,podsecuritycontext:4,podspec:4,podstatu:13,point:[4,11],poke:7,polici:4,popular:11,port:[4,15],possibl:[9,11,13],practic:13,pre:11,preced:4,prefer:15,preferred_during_scheduling_ignored_during_execut:15,prepar:11,present:[1,9],previou:14,previous:13,primari:14,princip:13,print:[4,15],prioriti:4,priority_class_nam:4,priorityclassnam:11,process:[4,9,15],process_pod_delet:[4,13],process_statu:13,profil:15,project:11,promin:11,proper:[11,13],properli:11,properti:[11,13],provid:[14,15],provider_download_dir:14,publicli:15,pull:[4,10,11,13,15],purpos:13,push:[4,13,15],put:5,pwd:15,py3:14,py:[11,13,15],pydocstyl:11,pylint:11,pypi:[11,13,15],python:[11,13,14,15],pyupgrad:11,quai:15,qualifi:4,quay_k8:15,quick:11,rais:[11,13],random:[4,11,13],random_name_suffix:4,rang:4,rc2:11,rc:11,reach:[4,9],read:[9,11,13],read_onli:15,read_pod:9,read_pod_ev:[9,13],read_pod_log:[9,13],readm:[11,13],reattach:[4,11,13],reattach_on_restart:4,recommend:[14,15],ref:11,refer:[4,5,7,11],reflect:13,regener:11,relat:11,releas:[11,13],relev:14,rema:11,remain:13,remote_pod:4,remov:[11,13,14,15],renam:11,render:[4,5],replac:11,repositori:[4,13,15],repres:15,request:[1,15],requir:[4,11,15],required_during_scheduling_ignored_during_execut:15,resid:[7,12],resourc:[1,4,7,15],result:[10,13],resum:9,retri:[4,9,11,13],retriev:[1,4,9],revert:11,root:15,rsa:14,rule:[4,11],run:[4,9,12,13,14,15],run_id:[11,13],run_pod_async:[9,13],runtim:15,s1:15,s:[1,4,11,13,14],safeti:15,same:[4,5,13],sat:14,save:[11,13],schedul:[4,15],schedulernam:4,script:[11,14],sdist:14,search:13,second:[4,9],secret:[4,11],secret_a:4,secret_all_kei:15,secret_b:4,secret_env:15,secret_fil:15,secur:[4,15],security_context:4,see:[9,11,13,15],seem:13,select:14,self:[1,4,5,7,9,13,14],sensibl:13,sensor:[2,11],sep:14,separ:[4,11,13],septemb:11,sequenc:[4,5,7,11],serial:10,server:[14,15],servic:4,service_account_nam:4,session:1,set:[11,13],setup:11,sh:15,sha512:14,sha:14,shasum:14,should:[4,7,12,13,14],should_retry_start_pod:9,shouldn:9,sidecar:[4,9,10,15],sidecar_contain:10,sidecar_container_nam:10,sign:14,signatur:[11,14],simplifi:[4,11,13,15],sinc:4,since_second:9,sleep:10,so:[9,13,15],softwar:[11,14],some:13,sourc:[1,4,5,7,9,10,13,15],spark:[5,7,11,13],spark_kubernet:[2,3,6,11],sparkappl:[5,7],sparkkubernetesoper:[5,12],sparkkubernetessensor:7,sparkoper:[5,7],speak:13,spec:[4,9],specif:[4,13],specifi:[1,4,11,12,13,15],sphinx:11,split:13,sql_alchemy_conn:15,sql_conn:15,ssd:15,start_dat:11,start_pod:13,startup:[4,9],startup_timeout:9,startup_timeout_second:4,state:[4,9,13,15],statu:[11,13],stdout:4,step:[13,14],still:15,stop:11,str:[1,4,5,7,9],stream:[1,9],strict:11,string:[5,11,13],structur:13,style:11,sub:11,sub_path:15,subclass:13,subdomain:4,subject:11,subprocess:4,substitut:15,succeed:9,success:15,success_st:7,successfulli:13,suffix:4,sum:14,suppli:15,support:[11,13],synchron:11,syntax:12,system:11,t:[4,9,13],tableau:11,tail_lin:9,take:[4,12,13],tar:14,task:[4,9,11,12,13,15],task_id:15,task_inst:15,templat:[4,5,11,13,15],template_ext:5,template_field:[4,5,7,11,13],temporari:[13,14],temporarili:9,termin:[4,13],terminal_st:9,termination_grace_period:4,test:[11,15],test_project_structur:11,testquai:15,than:[4,9,15],thei:[4,12,13],therefor:13,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],those:[13,14,15],thread:4,three:[12,13],through:15,ti:13,timeout:[4,9,11,13],timestamp:9,toc:11,toler:[4,15],too:9,tool:11,toolchain:11,top:[13,14],topology_kei:15,trap:10,tri:13,trust:14,tupl:9,two:[13,15],type:[9,11,12,13,15],typehint:11,typo:11,ubuntu:15,ui:4,ui_color:5,ultim:15,union:1,uniqu:11,unknown:[7,14],unsuccess:[11,13],unsuccessfulli:13,until:[10,13],untouch:11,untransform:13,up:[4,11,13],updat:[11,13],upgrad:[11,13],uri:12,url:[4,12,15],us:[1,4,5,9,11,12,13,14],usag:11,user:[11,13,14,15],usernam:15,utf:11,util:[2,13],v1_pod:9,v1affin:[4,15],v1beta2:[5,7],v1configmapenvsourc:15,v1contain:[4,15],v1containerport:[4,15],v1envfromsourc:15,v1envvar:[4,11,15],v1labelselector:15,v1labelselectorrequir:15,v1localobjectrefer:[4,15],v1nodeaffin:15,v1nodeselectorrequir:15,v1nodeselectorterm:15,v1persistentvolumeclaimvolumesourc:15,v1pod:[4,9,15],v1podaffin:15,v1podaffinityterm:15,v1preferredschedulingterm:15,v1resourcerequir:4,v1toler:[4,15],v1volum:[4,15],v1volumemount:[4,15],v1weightedpodaffinityterm:15,v2:11,valid:[11,14],valu:[4,9,11,13,15],value1:15,value2:15,variabl:[4,11,12,13,15],version:[1,5,7,11,13,14],via:[1,13,14,15],volum:[4,10,11,13],volume_mount:[4,10,11,15],volumemount:[4,11,13],wa:13,wai:[12,13],wait:[9,13],want:[13,14],warn:[11,13,14],warrant:9,wave:11,we:[4,9,13,15],weight:15,well:14,were:13,what:[4,13],when:[4,5,9,11,12,13],where:[7,11,13],whether:[7,9,13],which:[4,13,15],whl:14,why:14,widget:1,wish:4,within:[4,13],without:11,worker:[10,11,13],workload:9,worri:[13,14],would:[4,13,15],write:15,write_xcom:15,written:15,wrong:[11,13],wrongli:11,xcom:[4,9,10,11,13],xcom_cmd:10,xcom_mount_path:10,xcom_pul:15,xcom_sidecar:[2,8],yaml:[5,11,15],yamllint:11,yml:5,you:[4,12,13,14,15],your:[13,15],z0:4,zone:15},titles:["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.hooks</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.hooks.kubernetes</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.operators</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.operators.kubernetes_pod</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.operators.spark_kubernetes</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.sensors</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.sensors.spark_kubernetes</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.utils</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.utils.pod_manager</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.cncf.kubernetes.utils.xcom_sidecar</span></code>","Package apache-airflow-providers-cncf-kubernetes","Kubernetes cluster Connection","<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-cncf-kubernetes</span></code>","Installing from sources","KubernetesPodOperator"],titleterms:{"0":[11,13],"1":[11,13],"2":[11,13],"3":[11,13],"break":13,"class":[1,4,5,7,9,10],"default":[12,13],"function":[9,10],"new":13,airflow:[0,1,2,3,4,5,6,7,8,9,10,11,13],apach:[11,13],authent:12,between:15,bug:13,chang:13,changelog:13,cluster:[12,15],cncf:[0,1,2,3,4,5,6,7,8,9,10,11,13],commit:13,configmap:15,configur:12,connect:12,contain:15,content:[1,4,5,7,9,10,13],debug:15,delet:13,detail:13,differ:15,doe:15,featur:13,fix:13,from:14,guid:13,ha:13,hook:[0,1],how:15,id:12,imag:15,instal:[13,14],integr:14,is_delete_operator_pod:13,kubernet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15],kubernetes_pod:4,kubernetespodoper:[13,15],method:13,misc:13,modul:[1,4,5,7,9,10],note:13,object:15,oper:[3,4,5,15],overview:13,packag:[11,13,14],paramet:13,pip:13,pod:15,pod_manag:9,podlaunch:13,privat:15,provid:[0,1,2,3,4,5,6,7,8,9,10,11,13],pypi:14,refactor:13,refer:[13,15],registri:15,releas:14,renam:13,requir:13,resourc:13,secret:15,sensor:[6,7],sourc:14,spark_kubernet:[5,7],spec:15,submodul:[0,3,6,8],subpackag:2,thi:15,us:15,util:[8,9,10],verifi:14,volum:15,work:15,xcom:15,xcom_sidecar:10}})