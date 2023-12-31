import { FilterBar } from '#build/components';
<template>
    <div class="h-full w-full">
        <div class="container mx-auto flex flex-col items-center justify-center mt-16">
            <div class="flex flex-col items-center leading-[80px]">
                <span class="font-medium text-[64px] capitalize">Find the right</span>
                <div class="flex gap-4">
                    <span class="font-medium text-[64px] capitalize text-blue-700">candidate</span>
                    <span class="font-medium text-[64px] capitalize">for the job</span>
                </div>
            </div>
            <div class="w-full p-2 bg-gray-200 mt-8 flex rounded">
                <div class="flex-1 flex items-center gap-4">
                        <div class="w-1/2 flex gap-2 border-r-2 border-black/30">
                            <SvgSearch class="text-black/60" />
                            <input
                                v-model="name"
                                placeholder="Search for Name"
                                type="text"
                                class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
                            />
                        </div>
                        <div class="w-1/2 flex gap-2 items-center">
                            <SvgLocation class="text-black/60 scale-125" />
                            <input
                                v-model="location"
                                placeholder="Search for Location"
                                type="text"
                                class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
                            />
                        </div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="py-2 px-4 rounded h-fit flex gap-2 transition-all ease-in-out duration-300 border border-white bg-white/30 hover:bg-white cursor-pointer" 
                    @click="filterRef.toggleView()">
                        <SvgFilter class="text-black/60" />
                        <span>Filters</span>
                    </div>
                    <div class="py-2 px-6 rounded text-white bg-blue-700/80 hover:bg-blue-700 border border-blue-700/80 hover:border-blue-700 h-fit cursor-pointer" @click="search">Search</div>
                </div>
            </div>
        </div>
        <div v-if="viewResults" class="container mx-auto mt-16 flex flex-col">
            <span class="mb-8">{{ data.length }} candidates found</span>
            <div class="flex flex-col gap-4">
                <div v-for="(item, i) in data" :key="i" class="px-6 gap-4 py-4 border-2 border-grey-200 rounded-lg flex items-center">
                    <div class="h-16 w-16 bg-center rounded" :style="`background-image: url('${item.image || 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=64&h=35&dpr=2'}');`"></div>
                    <div class="flex flex-col w-1/2">
                        <div class="flex gap-4">
                            <span class="font-semibold text-xl"> {{ item.Name }},</span>
                            <!-- <span class="font-semibold text-xl"> {{ item.Karma }}K</span> -->
                        </div>
                        <div class="flex gap-4">
                            <span class="capitalize">{{ item.shortDesc }}</span>
                            <!-- <span class="capitalize"> {{ item.Location }},</span> -->
                            <!-- <span class="capitalize">Git Activity: {{ item["Git Activity"] }}</span> -->
                        </div>
                    </div>
                    <div class="flex justify-between w-1/2 ml-auto mr-16">
                        <div class="flex gap-4">
                            <div class="flex gap-4">
                                <span class="font-semibold text-xl">Skills</span>
                            </div>
                            <div class="flex flex-col mt-1">
                                <span v-for="(skill, i) in item.Skills" :key="i" class="capitalize text-sm">- {{ skill }}</span>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex gap-4">
                                <span class="font-semibold text-xl">Projects</span>
                            </div>
                            <div class="flex flex-col mt-1">
                                <span v-for="(project, i) in item.Projects" :key="i" class="capitalize text-sm">- {{ project }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FilterBar ref="filterRef" @update="(x) => filters = x"/>
    </div>
</template>
<script setup>
    import { v4 as uuid } from "uuid";
    const config = useRuntimeConfig();
    const filterRef = ref(null);
    const location = ref(null);
    const name = ref(null);

    let filters = ref({});

    const data = ref([])

    const viewResults = ref(false);

    async function search(){
        if(!location.value && !name.value) return;
        let reqBody;
        if(location.value) {
            reqBody = {
                "context": {
                    "domain": "dsep:talent",
                    "action": "search",
                    "version": "1.1.0",
                    "bap_id": "mulearn-deva-bap",
                    "bap_uri": "https://mulearn-deva-bap.loca.it",
                    "location": {
                        "country": {
                            "name": "India",
                            "code": "IND"
                        },
                        "city": {
                            "name": "Bangalore",
                            "code": "std:080"
                        }
                    },
                    "timestamp": new Date().toISOString(),
                    "message_id": uuid(),
                    "transaction_id": uuid()
                },
                "message": {
                    "intent": {
                        "location": {
                            "id": "1",
                            "city": {
                                "name": location.value
                            }
                        }
                    }
                }
            }
        }else if(name.value) {
            reqBody = {
                "context": {
                    "domain": "dsep:talent",
                    "action": "search",
                    "version": "1.1.0",
                    "bap_id": "mulearn-deva-bap",
                    "bap_uri": "https://mulearn-deva-bap.loca.it",
                    "location": {
                        "country": {
                            "name": "India",
                            "code": "IND"
                        },
                        "city": {
                            "name": "Bangalore",
                            "code": "std:080"
                        }
                    },
                    "timestamp": new Date().toISOString(),
                    "message_id": uuid(),
                    "transaction_id": uuid(),
                },
                "message": {
                    "intent": {
                        "item": {
                            "descriptor": {
                                "name": name.value
                            }
                        }
                    }
                }
            }
        }
        const { data: users, error } = await useFetch(`${config.api}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });
        if(error.value) {
            console.log(error.value);
            return;
        }
        const tempData = users.value.responses.map((x) => x.message.catalog.providers[0].items.map((y) => {
            return {
                ID: y.id,
                Name: y.descriptor.name,
                shortDesc: y.descriptor.short_desc,
                Karma: Math.floor(Math.random() * 10),
                Location: "Bangalore",
                "Git Activity": Math.floor(Math.random() * 10),
                Skills: ["React", "Node"],
                Projects: ["Project 1", "Project 2"],
                image: y.descriptor.images[0].url
            }
        })).flat();
        data.value = tempData.reduce((acc, current) => {
            const x = acc.find(item => item.ID === current.ID);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        viewResults.value = true;
    }
</script>
