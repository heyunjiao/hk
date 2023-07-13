import {getselectData} from '@/api/form'

export default {
    state: {
        formObj: {},
        formLabelData: [],
        formLabelStatus: false
    },
    mutations: {
        formLabelDataDelete(state, index) {
            let formLabelData = state.formLabelData;
            formLabelData.splice(index, 1);
        },
        formLabelStatusMethod(state, status) {
            state.formLabelStatus = status;
        },
        formLabelMethod(state, obj) {

            let data = [];
            obj.data.forEach((f) => {
                if (f.category >= 0 && f.category <= 6) {
                    // if (f.value != '') {
                    if (f.category == 1) {
                        if (f.options) {
                            f.options.forEach((z) => {
                                if (z.value == f.value) {
                                    f.value = z.label
                                }
                            })
                        }
                    }
                    data.push(f)
                    // }
                }
            });

            state.formLabelData = data;

        },
        formAssignment(state, obj) {
            state.formObj = obj
        },
        keyValue(state, params) {
            let data = [];
            params.data.forEach((f) => {
                if (f.category != 8 && f.category != 7) {
                    data.push(f)
                }
            })
            params.Callback(data.reduce((obj, curr) => {
                obj[curr.customParameters] = curr.value;
                return obj;
            }, {}))
        },
        functionTabData(state, params) {
            let data = params.data;
            let formObj = params.formObj;
            let tabData = params.tabData;
console.log(formObj,'formObj');
            data.forEach((f, index) => {
                if (index == 0) {
                    formObj.formData[0].value = f.value
                }
                if (f.value != '' && f.category != 7 && f.value != null) {
                    if (f.category == 1 || f.category == 2) {
                        f.options.forEach((z) => {
                            if (f.value == z.value) {
                                let nf = JSON.stringify(f);
                                nf = JSON.parse(nf);
                                nf.value = z.label;
                                tabData.push(nf)
                            }
                        })
                    } else {
                        if (index > 0) {
                            tabData.push(f)
                        }
                    }
                }
            });
            params.Callback({
                data, formObj, tabData
            })

        },
        functionAmbiguity(state, params) {
            let formObj1 = params.formObj1;
            let data = params.data;
            formObj1.formData[0].value = data[0].value;
            if (data[0].value != '') {
                formObj1.formData[0].classname = ' entered ';
                formObj1.formData[0].classnameitem = ' enteredlabel ';
            } else {
                formObj1.formData[0].classname = '  ';
                formObj1.formData[0].classnameitem = '  ';
            }
            params.Callback({
                data, formObj1
            })
        },
        functionTabClose(state, params) {
            let data = params.data;
            let formObj1 = params.formObj1;
            let v = params.v;
            formObj1.formData.forEach((f) => {
                if (f.id == v.id) {
                    f.value = '';
                    f.classname = '';
                    f.classnameitem = '';
                }
            })

            params.Callback({
                data,
                formObj1,
                v
            })
        },
        formProcessingMethod(state, params) {   // 表格编辑时候自动替换进表单组件方法
            /*
            * 参数类型object
            * params
            *   row 获取表格杭内容
            *   data 表单数据
            *   callback 回调方法*/
            let row = params.row;
            let data = params.data;
            data.forEach((item) => {
                Object.keys(row).forEach((item1) => {
                    if (item1 == item.customParameters) {
                        item.value = row[item.customParameters]
                    }
                })
            });
            params.callback(data)
        }
    },
    actions: {
        findContainingObject(state, {array, prop}) {
            return array.find(item => {
                return item[`prop`] === prop
            })
        },
        async getData({ commit }, params) {
            try {
                const response = await getselectData({}, params.url);
                let newresponse = response.result ||[]

                if (params.returnType) {
                    if (params.returnType === 0) {
                        newresponse = response;
                    } else if (params.returnType === 1) {
                        newresponse = response.data[params.returnParameterKey];
                    }
                }

                const newData = newresponse.map((f, findex) => {
                    let label = '';
                    let value = '';

                    Object.keys(f).forEach((z, index) => {
                        if (z === params.item.val) {
                            value = Object.values(f)[index];
                        }
                        if (z === params.item.key) {
                            label = Object.values(f)[index];
                        }
                    });

                    return {
                        label,
                        value,
                        index: findex
                    };
                });

                const labelData = newData
                    .filter(f => f.label)
                    .map(f => ({ index: f.index, label: f.label }));

                newData.forEach(f => {
                    const labelItem = labelData.find(item => item.index === f.index);
                    if (labelItem) {
                        f.label = labelItem.label;
                    }
                });

                params.res(newData);
            } catch (error) {
                // 处理错误
                console.error('Error:', error);
            }
        }
    },
    modules: {}
}
