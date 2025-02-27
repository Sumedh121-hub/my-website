const diseases = [
    {
      name: "Diabetes",
      description: "Diabetes is a chronic disease that occurs when the body is unable to properly process sugar, starches, and other foods. It results in high blood sugar levels. Type 1 diabetes occurs when the immune system mistakenly destroys insulin-producing cells in the pancreas. Type 2 diabetes is more common and often linked to obesity, poor diet, and inactivity. Symptoms include excessive thirst, frequent urination, and unexplained weight loss. Diabetes increases the risk of heart disease, kidney failure, and vision problems. Managing diabetes involves regular blood sugar checks, medication, and a balanced diet. Insulin and oral medications such as Metformin help control blood sugar levels. If untreated, diabetes can lead to serious complications, including nerve damage, blindness, and amputations. Regular physical activity and a healthy diet are essential for managing the disease.",
      medicine: "Insulin, Metformin, Glipizide",
      dosage: "Varies - Consult a doctor",
      symptoms: "Frequent urination, excessive thirst, unexplained weight loss."
    },
    {
      name: "Asthma",
      description: "Asthma is a chronic respiratory condition where the airways become inflamed and narrowed, making it difficult to breathe. Common triggers include allergens, exercise, and cold air. Asthma causes symptoms such as wheezing, coughing, shortness of breath, and chest tightness. It is often diagnosed in childhood, but it can occur at any age. Treatment typically includes bronchodilators (such as Albuterol) to open the airways and corticosteroids (such as Fluticasone) to reduce inflammation. Inhalers are commonly used to manage asthma attacks. Avoiding known triggers, such as smoking, allergens, and pollution, is essential. Asthma attacks can be life-threatening if not managed properly, so an action plan is critical. Asthma is more common in people with a family history of allergies.",
      medicine: "Albuterol, Fluticasone, Montelukast",
      dosage: "Varies depending on severity.",
      symptoms: "Wheezing, shortness of breath, chest tightness."
    },
    {
      name: "Hypertension",
      description: "Hypertension, also known as high blood pressure, is a condition where the force of the blood against the artery walls is too high. It is a major risk factor for heart disease, stroke, and kidney disease. Hypertension often has no symptoms, which is why it is called the 'silent killer.' Risk factors include obesity, lack of physical activity, excessive salt intake, and family history. Blood pressure is measured in millimeters of mercury (mmHg), with a normal reading being around 120/80 mmHg. Hypertension is diagnosed when readings consistently exceed 140/90 mmHg. Medications such as ACE inhibitors, beta-blockers, and diuretics are used to manage high blood pressure. Lifestyle changes, including reducing salt intake, exercising regularly, and managing stress, are also recommended. Uncontrolled hypertension can lead to severe health complications, including heart attacks, strokes, and kidney failure.",
      medicine: "Lisinopril, Amlodipine, Metoprolol, Hydrochlorothiazide",
      dosage: "Once daily, or as prescribed.",
      symptoms: "Headaches, shortness of breath, nosebleeds."
    },
    {
      name: "Flu",
      description: "The flu, or influenza, is a viral infection that attacks the respiratory system. It is highly contagious and typically spreads through droplets when an infected person coughs or sneezes. Symptoms include fever, chills, sore throat, body aches, fatigue, and cough. The flu can cause severe illness, especially in young children, elderly adults, and people with underlying health conditions. In most cases, flu symptoms resolve within one to two weeks. However, complications such as pneumonia can arise, particularly in vulnerable populations. Antiviral medications such as Oseltamivir (Tamiflu) can reduce the severity and duration of flu symptoms if taken early. A flu vaccine is available annually and can reduce the risk of infection. Good hygiene practices, such as frequent hand washing and covering coughs, help prevent the spread of the flu.",
      medicine: "Oseltamivir (Tamiflu), Zanamivir (Relenza), Paracetamol",
      dosage: "Oseltamivir: Twice a day for 5 days.",
      symptoms: "Fever, chills, cough, sore throat, body aches."
    },
    {
      name: "COVID-19",
      description: "COVID-19 is a contagious respiratory illness caused by the SARS-CoV-2 virus. It primarily spreads through respiratory droplets when an infected person talks, coughs, or sneezes. Symptoms vary, ranging from mild to severe, and include fever, cough, shortness of breath, and fatigue. Some individuals may experience loss of taste or smell, while others may have gastrointestinal symptoms like nausea and diarrhea. COVID-19 can cause severe lung damage and complications, particularly in older adults or individuals with underlying health conditions. Vaccines have been developed to prevent severe illness and transmission. Antiviral medications and steroids are used in treatment. Public health measures such as mask-wearing, social distancing, and frequent handwashing remain key in reducing transmission. Quarantine and isolation protocols are recommended for individuals who test positive or have been exposed to COVID-19.",
      medicine: "Remdesivir, Steroids, Monoclonal Antibodies (Casirivimab and Imdevimab), Paracetamol",
      dosage: "Varies based on severity and medical advice.",
      symptoms: "Fever, cough, shortness of breath, fatigue."
    },
    {
      name: "Cancer",
      description: "Cancer is a group of diseases characterized by uncontrolled cell growth. It can affect any part of the body and may spread to other areas through the blood and lymphatic system. Symptoms vary depending on the type and stage of cancer. Common symptoms include unexplained weight loss, fatigue, lumps, pain, and changes in skin or bowel habits. Treatment depends on the cancer type and may involve surgery, chemotherapy, radiation therapy, or targeted therapies. Chemotherapy drugs such as Methotrexate, Doxorubicin, and Cyclophosphamide are commonly used to treat cancer. Targeted therapies, such as Imatinib and Rituximab, work by interfering with specific molecules involved in tumor growth. Early detection and treatment are crucial to improving outcomes.",
      medicine: "Methotrexate, Doxorubicin, Cyclophosphamide, Imatinib, Rituximab",
      dosage: "Varies depending on cancer type.",
      symptoms: "Fatigue, weight loss, lumps, pain."
    },
    // Additional 50 diseases starting from here:
    {
      name: "Alzheimer's Disease",
      description: "Alzheimer's disease is a progressive neurological disorder that causes memory loss, confusion, and changes in behavior. It is the most common form of dementia, and its symptoms worsen over time. Early symptoms include difficulty remembering names and recent events. As the disease progresses, individuals may struggle with basic tasks such as cooking, cleaning, and managing finances. There is currently no cure, but medications like Donepezil and Memantine can help manage symptoms and improve quality of life. Therapy and support for caregivers are important in managing the emotional impact. Risk factors include age, genetics, and family history. Regular mental stimulation, physical exercise, and a healthy diet may help delay progression.",
      medicine: "Donepezil, Memantine, Rivastigmine",
      dosage: "Donepezil: Once daily.",
      symptoms: "Memory loss, confusion, difficulty with tasks."
    },
    {
      name: "Arthritis",
      description: "Arthritis refers to a group of more than 100 diseases affecting the joints, leading to pain, stiffness, and swelling. It is more common as people age, and it can cause severe disability. Osteoarthritis is the most common type, caused by wear and tear on the joints. Rheumatoid arthritis is an autoimmune disorder where the body's immune system attacks the joints. Symptoms include joint pain, swelling, and reduced range of motion. Medications such as Nonsteroidal Anti-Inflammatory Drugs (NSAIDs), Methotrexate, and corticosteroids are commonly used to relieve symptoms and manage inflammation. Physical therapy and regular exercise are important for maintaining joint function. Severe cases may require surgery, including joint replacement.",
      medicine: "NSAIDs, Methotrexate, Corticosteroids",
      dosage: "As prescribed, depending on severity.",
      symptoms: "Joint pain, swelling, stiffness."
    },
    {
      name: "HIV/AIDS",
      description: "HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, weakening the body's ability to fight infections. If untreated, it can lead to AIDS (Acquired Immunodeficiency Syndrome), which is a condition where the immune system is severely damaged. HIV is transmitted through blood, sexual contact, and from mother to child during childbirth or breastfeeding. Early symptoms of HIV include fever, fatigue, and swollen lymph nodes. With proper treatment, individuals with HIV can live normal lives. Antiretroviral therapy (ART) helps reduce the viral load and prevent the progression to AIDS. Condoms and PrEP (pre-exposure prophylaxis) are key in preventing transmission.",
      medicine: "ART (Antiretroviral Therapy), Tenofovir, Efavirenz",
      dosage: "Once daily, as prescribed.",
      symptoms: "Fatigue, fever, swollen lymph nodes."
    },
    {
      name: "Tuberculosis (TB)",
      description: "Tuberculosis is a bacterial infection that primarily affects the lungs but can also affect other parts of the body. It is spread through the air when an infected person coughs or sneezes. Symptoms include persistent cough, chest pain, weight loss, and night sweats. TB can be fatal if left untreated. Treatment involves a combination of antibiotics taken over several months. The most common TB drugs are Rifampin, Isoniazid, and Pyrazinamide. Drug-resistant TB is a growing concern and requires longer treatment courses with more potent drugs. Vaccination with the BCG vaccine can help prevent TB, especially in children.",
      medicine: "Rifampin, Isoniazid, Pyrazinamide",
      dosage: "For several months, as prescribed.",
      symptoms: "Cough, chest pain, weight loss, night sweats."
    },
    {
      name: "Migraine",
      description: "Migraine is a type of headache characterized by intense, throbbing pain, often on one side of the head. It may be accompanied by nausea, vomiting, and sensitivity to light and sound. Migraines can last from a few hours to several days. The exact cause is unknown, but factors like stress, hormonal changes, certain foods, and lack of sleep can trigger an episode. Treatments include pain relievers like Ibuprofen, Triptans, and preventive medications such as Beta-blockers or Antidepressants. Lifestyle changes like stress management and adequate sleep are also important in reducing frequency.",
      medicine: "Ibuprofen, Triptans (Sumatriptan), Beta-blockers",
      dosage: "Varies based on severity and prescription.",
      symptoms: "Severe headache, nausea, sensitivity to light/sound."
    },
    {
        name: "Epilepsy",
        description: "Epilepsy is a neurological disorder marked by recurrent, unprovoked seizures. Seizures occur when abnormal electrical activity disrupts normal brain function. The severity and frequency of seizures can vary, ranging from brief periods of lost awareness to full-body convulsions. Seizures may be triggered by factors such as stress, lack of sleep, flashing lights, or high fever. Treatment for epilepsy typically includes anticonvulsant medications such as Phenytoin, Carbamazepine, and Valproate. In some cases, surgery or a ketogenic diet may be recommended for drug-resistant epilepsy. People with epilepsy are encouraged to avoid potential triggers and maintain a healthy lifestyle.",
        medicine: "Phenytoin, Carbamazepine, Valproate",
        dosage: "As prescribed by the doctor, based on seizure type.",
        symptoms: "Seizures, loss of consciousness, confusion."
      },
      {
        name: "Parkinson's Disease",
        description: "Parkinson's disease is a progressive neurological disorder that affects movement control. It results from the death of dopamine-producing cells in the brain, leading to tremors, stiffness, and slow movements. Early symptoms include mild tremors, difficulty with balance, and changes in handwriting. As the disease progresses, individuals may experience difficulty walking, speaking, and performing daily activities. Treatment includes medications like Levodopa and Dopamine Agonists, which help manage symptoms by boosting dopamine levels. Physical therapy and lifestyle changes also play an important role in managing symptoms. While Parkinson's disease currently has no cure, medications can improve quality of life and reduce symptoms.",
        medicine: "Levodopa, Dopamine Agonists, MAO-B Inhibitors",
        dosage: "Varies, typically multiple doses per day.",
        symptoms: "Tremors, rigidity, slow movements, balance issues."
      },
      {
        name: "Osteoporosis",
        description: "Osteoporosis is a bone disease that causes bones to become weak and brittle, increasing the risk of fractures. It occurs when the body loses too much bone mass or fails to produce enough bone tissue. Symptoms often go unnoticed until a fracture occurs. Risk factors include age, gender (women are more likely to develop osteoporosis), family history, and lifestyle factors such as smoking and excessive alcohol consumption. Treatment includes medications such as Bisphosphonates (Alendronate), Calcitonin, and Denosumab. Weight-bearing exercises and a diet rich in calcium and vitamin D are also essential for bone health. Preventive measures are important in reducing the risk of fractures.",
        medicine: "Alendronate, Calcitonin, Denosumab",
        dosage: "Once a week or as prescribed.",
        symptoms: "Fractures, loss of height, back pain."
      },
      {
        name: "Multiple Sclerosis",
        description: "Multiple sclerosis (MS) is a chronic autoimmune disease that affects the central nervous system. It occurs when the body's immune system attacks the protective covering of nerve fibers, leading to inflammation and damage. Symptoms of MS vary widely and can include numbness, weakness, difficulty with coordination and balance, vision problems, and cognitive impairments. The exact cause is unknown, but genetic and environmental factors likely play a role. Disease-modifying therapies such as Interferons, Glatiramer Acetate, and Ocrelizumab can help slow disease progression. While there is no cure for MS, medications and physical therapy help manage symptoms and improve quality of life.",
        medicine: "Interferons, Glatiramer Acetate, Ocrelizumab",
        dosage: "Varies based on disease type and progression.",
        symptoms: "Numbness, weakness, vision problems, cognitive issues."
      },
      {
        name: "Heart Attack (Myocardial Infarction)",
        description: "A heart attack occurs when blood flow to a part of the heart muscle is blocked, leading to tissue damage or death. It typically results from a buildup of fatty deposits in the arteries, known as atherosclerosis. Symptoms include chest pain, shortness of breath, nausea, dizziness, and pain radiating to the arm, neck, or jaw. Immediate treatment often includes medications such as aspirin, thrombolytics, and blood thinners to restore blood flow. Lifestyle changes such as a healthy diet, regular exercise, and quitting smoking are critical in preventing future heart attacks. In some cases, surgery such as angioplasty or coronary artery bypass surgery may be necessary.",
        medicine: "Aspirin, Clopidogrel, Thrombolytics, Statins",
        dosage: "Depends on treatment regimen and hospital protocol.",
        symptoms: "Chest pain, shortness of breath, nausea, dizziness."
      },
      {
        name: "Anemia",
        description: "Anemia is a condition where you do not have enough healthy red blood cells to carry adequate oxygen to your body’s tissues. It can be caused by various factors, including nutritional deficiencies (iron, vitamin B12), chronic disease, or genetic conditions like sickle cell disease. Symptoms of anemia include fatigue, pale skin, shortness of breath, and dizziness. Treatment depends on the underlying cause and may include iron supplements, vitamin B12 injections, or erythropoiesis-stimulating agents. Severe cases may require blood transfusions. Regular monitoring of blood counts and maintaining a healthy diet rich in iron and vitamins is essential.",
        medicine: "Ferrous sulfate, Vitamin B12 injections, Erythropoiesis-stimulating agents",
        dosage: "Varies, typically daily doses.",
        symptoms: "Fatigue, pale skin, dizziness, shortness of breath."
      },
      {
        name: "Stroke",
        description: "A stroke occurs when there is a sudden disruption in the blood supply to the brain, either due to a blockage (ischemic stroke) or bleeding (hemorrhagic stroke). Symptoms depend on the area of the brain affected and may include sudden numbness, weakness, confusion, difficulty speaking, vision problems, and severe headache. Immediate treatment with clot-busting medications (for ischemic stroke) or surgery (for hemorrhagic stroke) can minimize brain damage. Rehabilitation, including physical therapy and speech therapy, plays an essential role in recovery. Prevention includes managing risk factors such as high blood pressure, high cholesterol, and diabetes.",
        medicine: "Tissue Plasminogen Activator (tPA), Antiplatelet drugs, Anticoagulants",
        dosage: "As prescribed for recovery or prevention.",
        symptoms: "Sudden weakness, confusion, vision problems, severe headache."
      },
      {
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        description: "COPD is a progressive lung disease that causes difficulty breathing due to the narrowing of the airways. It is primarily caused by long-term exposure to irritants such as cigarette smoke, air pollution, or chemical fumes. Symptoms include chronic cough, wheezing, shortness of breath, and mucus production. COPD can be managed with medications such as bronchodilators (Salbutamol), inhaled corticosteroids (Fluticasone), and oxygen therapy. Smoking cessation is the most important step in managing COPD. Pulmonary rehabilitation and regular exercise can help improve lung function and quality of life.",
        medicine: "Salbutamol, Fluticasone, Ipratropium",
        dosage: "As prescribed, typically via inhaler.",
        symptoms: "Cough, wheezing, shortness of breath, excess mucus."
      },
      {
        name: "Gastroesophageal Reflux Disease (GERD)",
        description: "GERD is a digestive condition where stomach acid or bile irritates the food pipe lining. It is characterized by acid reflux, which leads to heartburn, regurgitation, and chest pain. The condition occurs when the lower esophageal sphincter (LES) weakens, allowing stomach contents to flow back into the esophagus. Treatment includes antacids (like Tums), proton pump inhibitors (PPIs), and H2 blockers (like Ranitidine). Lifestyle changes, such as avoiding large meals and not lying down immediately after eating, are also important for managing GERD. Untreated GERD can lead to complications such as esophagitis, ulcers, and even esophageal cancer.",
        medicine: "Omeprazole, Ranitidine, Antacids",
        dosage: "Omeprazole: Once daily before meals.",
        symptoms: "Heartburn, regurgitation, chest pain, difficulty swallowing."
      },
      {
        name: "Hepatitis B",
        description: "Hepatitis B is a viral infection that affects the liver, causing inflammation and potentially leading to cirrhosis or liver cancer if left untreated. It is spread through contact with the blood or other bodily fluids of an infected person. Symptoms may include fatigue, jaundice, abdominal pain, and dark urine. Vaccination is available to prevent hepatitis B. For those already infected, antiviral medications such as Tenofovir and Entecavir can help manage the infection. Regular monitoring of liver function is important to prevent complications.",
        medicine: "Tenofovir, Entecavir, Pegylated interferon",
        dosage: "As prescribed, typically for long-term treatment.",
        symptoms: "Fatigue, jaundice, abdominal pain, dark urine."
      },
      {
        name: "Celiac Disease",
        description: "Celiac disease is an autoimmune disorder in which the ingestion of gluten leads to damage in the small intestine. It is triggered by gluten found in wheat, barley, and rye. Symptoms include diarrhea, abdominal pain, bloating, and fatigue. Over time, untreated celiac disease can lead to nutrient deficiencies, osteoporosis, and increased risk of other autoimmune diseases. The only treatment for celiac disease is a strict, lifelong gluten-free diet. Early diagnosis and dietary modifications are crucial to managing symptoms and preventing long-term complications.",
        medicine: "No specific medication; gluten-free diet is the primary treatment.",
        dosage: "N/A - Focus on dietary restrictions.",
        symptoms: "Diarrhea, bloating, fatigue, abdominal pain."
      },
      {
        name: "Lupus",
        description: "Lupus is a chronic autoimmune disease where the body’s immune system mistakenly attacks healthy tissues and organs. It can affect various body parts, including the skin, joints, kidneys, and heart. Symptoms vary widely but commonly include fatigue, joint pain, skin rashes, and kidney problems. Treatment focuses on managing symptoms and preventing flare-ups. Medications such as hydroxychloroquine, corticosteroids, and immunosuppressants are often used. While there is no cure for lupus, many individuals with the disease can lead active lives with proper treatment and lifestyle modifications.",
        medicine: "Hydroxychloroquine, Prednisone, Immunosuppressants",
        dosage: "As prescribed, based on disease activity.",
        symptoms: "Fatigue, joint pain, skin rashes, kidney problems."
      },
      {
        name: "Psoriasis",
        description: "Psoriasis is a chronic autoimmune condition that speeds up the growth cycle of skin cells, resulting in the buildup of thick, silvery scales on the skin’s surface. Common areas affected include the scalp, elbows, knees, and lower back. Symptoms include red, inflamed skin and dry, cracked patches that may bleed. Psoriasis can be triggered by stress, infections, or certain medications. Treatments include topical treatments such as corticosteroids, vitamin D analogs, and phototherapy. In severe cases, systemic medications such as biologics (Adalimumab) or methotrexate may be used.",
        medicine: "Topical corticosteroids, Adalimumab, Methotrexate",
        dosage: "As prescribed, often topical or injected.",
        symptoms: "Red, inflamed skin, silvery scales, dry patches."
      },
      {
        name: "Chronic Fatigue Syndrome",
        description: "Chronic Fatigue Syndrome (CFS), also known as Myalgic Encephalomyelitis (ME), is a complex disorder characterized by extreme fatigue that doesn’t improve with rest. It can be triggered by viral infections, stress, or immune system abnormalities. Symptoms include persistent fatigue, muscle pain, headaches, and difficulty concentrating. Treatment focuses on symptom management, including pain relievers, antidepressants, and lifestyle changes to improve energy levels and quality of life.",
        medicine: "Pain relievers (Ibuprofen), Antidepressants (Amitriptyline)",
        dosage: "As prescribed for symptom management.",
        symptoms: "Persistent fatigue, muscle pain, headaches, cognitive difficulties."
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        description: "Irritable Bowel Syndrome (IBS) is a common gastrointestinal disorder that causes symptoms like abdominal pain, bloating, diarrhea, and constipation. The exact cause is unknown, but it may involve abnormal muscle contractions in the intestines, stress, or food intolerances. Management includes dietary changes, stress reduction, and medications like antispasmodics and laxatives.",
        medicine: "Antispasmodics (Hyoscyamine), Laxatives (Polyethylene glycol), Fiber supplements",
        dosage: "As prescribed, typically daily for symptom management.",
        symptoms: "Abdominal pain, bloating, diarrhea, constipation."
    },
    {
        name: "Endometriosis",
        description: "Endometriosis is a painful condition where tissue similar to the lining of the uterus grows outside the uterus. This can cause severe menstrual cramps, pain during intercourse, and infertility. Treatment may include pain relief, hormone therapy to control menstrual cycles, and in some cases, surgery to remove endometrial tissue.",
        medicine: "Hormonal therapies (Birth control pills, GnRH agonists), Pain relievers (Ibuprofen)",
        dosage: "Hormonal therapy taken daily; pain relievers as needed.",
        symptoms: "Severe menstrual cramps, pelvic pain, infertility."
    },
    {
        name: "Osteoarthritis",
        description: "Osteoarthritis is a degenerative joint disease that results in the breakdown of cartilage, causing pain, stiffness, and swelling in the affected joints. It commonly affects the knees, hips, and hands. Treatment focuses on managing pain and improving mobility, with options including nonsteroidal anti-inflammatory drugs (NSAIDs), corticosteroid injections, and physical therapy.",
        medicine: "NSAIDs (Ibuprofen), Corticosteroid injections, Acetaminophen",
        dosage: "NSAIDs and Acetaminophen as needed for pain relief.",
        symptoms: "Joint pain, stiffness, swelling."
    },
    {
        name: "Celiac Disease",
        description: "Celiac disease is an autoimmune disorder where ingestion of gluten triggers an immune response that damages the small intestine lining. This can lead to malabsorption of nutrients. Symptoms include diarrhea, abdominal pain, bloating, and fatigue. The only treatment is a lifelong gluten-free diet, which allows the intestine to heal and symptoms to resolve.",
        medicine: "No specific medication; gluten-free diet is the primary treatment.",
        dosage: "N/A - Focus on strict dietary restrictions.",
        symptoms: "Diarrhea, abdominal pain, bloating, fatigue."
    },
    {
        name: "Bipolar Disorder",
        description: "Bipolar disorder is a mental health condition characterized by extreme mood swings, including manic episodes (highs) and depressive episodes (lows). Symptoms may include increased energy, impulsiveness, and risky behavior during manic phases, and feelings of sadness, hopelessness, and lethargy during depressive phases. Medications, including mood stabilizers and antipsychotics, are used to manage the condition.",
        medicine: "Lithium, Valproate, Olanzapine",
        dosage: "As prescribed, with regular monitoring of mood and side effects.",
        symptoms: "Extreme mood swings, manic episodes, depressive episodes."
    },
    {
        name: "Schizophrenia",
        description: "Schizophrenia is a severe mental health disorder that affects how a person thinks, feels, and behaves. It is characterized by symptoms such as hallucinations, delusions, disorganized thinking, and impaired functioning. Antipsychotic medications, along with therapy, are used to help manage symptoms and improve quality of life.",
        medicine: "Antipsychotics (Risperidone, Olanzapine)",
        dosage: "As prescribed, typically once or twice daily.",
        symptoms: "Hallucinations, delusions, disorganized thinking."
    },
    {
        name: "Anxiety Disorder",
        description: "Anxiety disorder is characterized by excessive worry, fear, or nervousness that interferes with daily activities. Common types include generalized anxiety disorder, panic disorder, and social anxiety disorder. Treatment often includes a combination of psychotherapy and medications such as selective serotonin reuptake inhibitors (SSRIs).",
        medicine: "SSRIs (Sertraline, Fluoxetine), Benzodiazepines (Lorazepam)",
        dosage: "SSRIs taken daily; benzodiazepines as needed for acute anxiety.",
        symptoms: "Excessive worry, panic attacks, fear, nervousness."
    },
    {
        name: "Psoriatic Arthritis",
        description: "Psoriatic arthritis is an inflammatory arthritis that affects some people with psoriasis. It can cause joint pain, swelling, and stiffness, often affecting the fingers, toes, and spine. It may be associated with skin changes from psoriasis. Treatment includes NSAIDs, disease-modifying antirheumatic drugs (DMARDs), and biologics.",
        medicine: "NSAIDs, Methotrexate, Adalimumab",
        dosage: "Methotrexate weekly; biologics as prescribed, typically injections.",
        symptoms: "Joint pain, swelling, stiffness, psoriasis lesions."
    },
    {
        name: "Sickle Cell Disease",
        description: "Sickle cell disease is a genetic blood disorder where red blood cells become rigid and shaped like a crescent, leading to blockages in blood flow. Symptoms include severe pain (called sickle cell crises), fatigue, and frequent infections. Treatment includes pain management, blood transfusions, and medications such as Hydroxyurea to reduce the frequency of crises.",
        medicine: "Hydroxyurea, Pain relievers, Blood transfusions",
        dosage: "Hydroxyurea taken daily, pain relievers as needed.",
        symptoms: "Pain crises, fatigue, frequent infections."
    },
    {
        name: "Hemophilia",
        description: "Hemophilia is a genetic disorder where the blood does not clot properly, leading to excessive bleeding after injury. People with hemophilia may experience spontaneous bleeding episodes, particularly into the joints or muscles. Treatment includes clotting factor replacement therapy and medications to promote blood clotting.",
        medicine: "Factor VIII or IX replacement, Desmopressin",
        dosage: "Factor replacement given as prescribed, depending on severity.",
        symptoms: "Excessive bleeding, joint pain and swelling, bruising."
    },
    {
        name: "HIV/AIDS",
        description: "Human Immunodeficiency Virus (HIV) attacks the immune system by destroying CD4 cells, which are vital for immune defense. Left untreated, it can lead to Acquired Immunodeficiency Syndrome (AIDS), making the body vulnerable to infections and cancers. Antiretroviral therapy (ART) is the standard treatment to control viral replication and preserve immune function.",
        medicine: "Tenofovir, Lamivudine, Efavirenz",
        dosage: "Combination ART taken once or twice daily.",
        symptoms: "Fatigue, swollen lymph nodes, weight loss, night sweats."
    },
    {
        name: "Crohn's Disease",
        description: "Crohn's disease is an inflammatory bowel disease (IBD) that causes chronic inflammation of the gastrointestinal tract. It can affect any part of the digestive tract, leading to symptoms like abdominal pain, diarrhea, weight loss, and fatigue. Medications include anti-inflammatory drugs, immunosuppressants, and biologics like Infliximab.",
        medicine: "Infliximab, Azathioprine, Corticosteroids",
        dosage: "Infliximab administered intravenously; corticosteroids and immunosuppressants as prescribed.",
        symptoms: "Abdominal pain, diarrhea, weight loss, fatigue."
    },
    {
        name: "Chronic Kidney Disease",
        description: "Chronic kidney disease (CKD) refers to the gradual loss of kidney function over time, often as a result of high blood pressure, diabetes, or kidney infections. Symptoms may include swelling, fatigue, changes in urination, and high blood pressure. Treatment may include medications to control blood pressure, diabetes, and other risk factors, along with dialysis in advanced stages.",
        medicine: "ACE inhibitors (Lisinopril), Diuretics (Furosemide), Erythropoiesis-stimulating agents",
        dosage: "As prescribed, with regular monitoring of kidney function.",
        symptoms: "Swelling, fatigue, changes in urination, high blood pressure."
    }
      
    
    // Add 46 more diseases here following the same structure as above
  ];
  
  // Function to generate disease list dynamically
  function generateDiseaseList(filteredDiseases = diseases) {
    const diseaseListContainer = document.getElementById("diseaseList");
    diseaseListContainer.innerHTML = ''; // Clear previous content
    
    filteredDiseases.forEach(disease => {
      const diseaseCard = document.createElement("div");
      diseaseCard.classList.add("disease-card");
      
      diseaseCard.innerHTML = `
        <h2>${disease.name}</h2>
        <img src="https://via.placeholder.com/300x200" alt="${disease.name} Image">
        <p><strong>Description:</strong> ${disease.description}</p>
        <p><strong>Medicine:</strong> ${disease.medicine}</p>
        <p><strong>Dosage:</strong> ${disease.dosage}</p>
        <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
      `;
      
      diseaseListContainer.appendChild(diseaseCard);
    });
  }
  
  // Function for the search bar filter and suggestions
  function filterDiseases() {
    const searchBar = document.getElementById("searchBar");
    const query = searchBar.value.toLowerCase();
    const filteredDiseases = diseases.filter(disease => disease.name.toLowerCase().includes(query));
    
    // Display matching diseases
    generateDiseaseList(filteredDiseases);
  
    // Show suggestions dropdown
    showSuggestions(query, filteredDiseases);
  }
  
  // Function to show search suggestions
  function showSuggestions(query, filteredDiseases) {
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = ''; // Clear previous suggestions
  
    if (query === '') return; // Don't show suggestions if the search bar is empty
  
    filteredDiseases.forEach(disease => {
      if (disease.name.toLowerCase().includes(query)) {
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = disease.name;
        suggestionItem.onclick = function() {
          document.getElementById("searchBar").value = disease.name;
          generateDiseaseList([disease]);
          suggestionsList.innerHTML = ''; // Clear suggestions after selection
        };
        suggestionsList.appendChild(suggestionItem);
      }
    });
  }
  
  // Initialize the disease list on page load
  window.onload = generateDiseaseList;