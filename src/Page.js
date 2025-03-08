import React from 'react';
import './App.css';
import { useNavigate} from 'react-router-dom';




function Page() {
    const Navigate = useNavigate();

    const handleSave = () => {
        const firstName = document.querySelector('.text1').value;
        const lastName = document.querySelector('.text2').value;
        const dob = document.querySelector('.date').value;
        const gender = document.querySelector('.gend').value;
        const email = document.querySelector('.text5').value;
        const phone = document.querySelector('.text6').value;
        const nationality = document.querySelector('.nat').value;
        const maritalStatus = document.querySelector('.mari').value;
        const highestQualification = document.querySelector('.high').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{6,14}$/;

        if (
            firstName === '' ||
            lastName === '' ||
            dob === '' ||
            gender === '1' ||
            phone === '' ||
            nationality === '1' || // Assuming '1' is the default empty value for nationality
            maritalStatus === '1' || 
            highestQualification === '1' 
        ) {
            alert('Please fill out all the fields before saving.');
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else if (!phoneRegex.test(phone)) {
            alert('Check your phone number.')
        } else {
            alert('Data saved successfully!');
            Navigate('/Page1');
        }
    };

return(

    <div>
<p className='name'> FIRST NAME</p>  <input type='text' className='text1'></input>
<p className='names'> LAST NAME</p>  <input type='text' className='text2'></input>
<p className='dob'> DOB</p>  <input type="date"className='date'></input>
<p className='gen'>GENDER</p>  
<select id="gend" name="gend" className='gend'>
          <option value="1"></option>
          <option value="2" className='mal'>Male</option>
          <option value="3" className='fem'>Female</option>
          <option value="3" className='pref'> Prefer not to say</option>
        </select>
        
<p className='mail'> E-MAIL</p>  <input type='text' className='text5'></input>
<p className='ph'> PHONE  </p>  <input type='text' className='text6'></input>
<p className='nation'>NATIONALITY</p>  
<select id="nat" name="nat" className='nat'>
          <option value="1"></option>
<option value="2" className=' '>Afghan</option>
<option value="3" className=' '>Albanian</option>
<option value="4" className=' '>Algerian</option>
<option value="5" className=' '>American</option>
<option value="6" className=' '>Andorran</option>
<option value="7" className=' '>Angolan</option>
<option value="8" className=' '>Anguillan</option>
<option value="9" className=' '>Citizen of Antigua </option>
<option value="10" className=' '>Argentine</option>
<option value="11" className=' '>Armenian</option>
<option value="12" className=' '>Australian</option>
<option value="13" className=' '>Austrian</option>
<option value="14" className=' '>Azerbaijani</option>
<option value="15" className=' '>Bahamian</option>
<option value="16" className=' '>Bahraini</option>
<option value="17" className=' '>Bangladeshi</option>
<option value="18" className=' '>Barbadian</option>
<option value="19" className=' '>Belarusian</option>
<option value="20" className=' '>Belgian</option>
<option value="21" className=' '>Belizean</option>
<option value="22" className=' '>Beninese</option>
<option value="23" className=' '>Bermudian</option>
<option value="24" className=' '>Bhutanese</option>
<option value="25" className=' '>Bolivian</option>
<option value="26" className=' '>Bosnian</option>
<option value="27" className=' '>Botswanan</option>
<option value="28" className=' '>Brazilian</option>
<option value="29" className=' '>British</option>
<option value="30" className=' '>British Virgin Islander</option>
<option value="31" className=' '>Bruneian</option>
<option value="32" className=' '>Bulgarian</option>
<option value="33" className=' '>Burkinan</option>
<option value="34" className=' '>Burmese</option>
<option value="35" className=' '>Burundian</option>
<option value="36" className=' '>Cambodian</option>
<option value="37" className=' '>Cameroonian</option>
<option value="38" className=' '>Canadian</option>
<option value="39" className=' '>Cape Verdean</option>
<option value="40" className=' '>Cayman Islander</option>
<option value="41" className=' '>Central African</option>
<option value="42" className=' '>Chadian</option>
<option value="43" className=' '>Chilean</option>
<option value="44" className=' '>Chinese</option>
<option value="45" className=' '>Christmas Islander</option>
<option value="46" className=' '>Cocos Islander</option>
<option value="47" className=' '>Colombian</option>
<option value="48" className=' '>Comoran</option>
<option value="49" className=' '>Congolese</option>
<option value="50" className=' '>Cook Islander</option>
<option value="51" className=' '>Costa Rican</option>
<option value="52" className=' '>Croatian</option>
<option value="53" className=' '>Cuban</option>
<option value="54" className=' '>Curacaoan</option>
<option value="55" className=' '>Cypriot</option>
<option value="56" className=' '>Czech</option>
<option value="57" className=' '>Danish</option>
<option value="58" className=' '>Djiboutian</option>
<option value="59" className=' '>Dominican</option>
<option value="60" className=' '>Dutch</option>
<option value="61" className=' '>East Timorese</option>
<option value="62" className=' '>Ecuadorean</option>
<option value="63" className=' '>Egyptian</option>
<option value="64" className=' '>Salvadorean</option>
<option value="65" className=' '>Equatorial Guinean</option>
<option value="66" className=' '>Eritrean</option>
<option value="67" className=' '>Estonian</option>
<option value="68" className=' '>Ethiopian</option>
<option value="69" className=' '>Falkland Islander</option>
<option value="70" className=' '>Faroese</option>
<option value="71" className=' '>Fijian</option>
<option value="72" className=' '>Finn</option>
<option value="73" className=' '>French</option>
<option value="74" className=' '>French Polynesian</option>
<option value="75" className=' '>Gabonese</option>
<option value="76" className=' '>Gambian</option>
<option value="77" className=' '>Georgian</option>
<option value="78" className=' '>German</option>
<option value="79" className=' '>Ghanaian</option>
<option value="80" className=' '>Gibraltar</option>
<option value="81" className=' '>Greek</option>
<option value="82" className=' '>Greenlandic</option>
<option value="83" className=' '>Grenadian</option>
<option value="84" className=' '>Guadeloupean</option>
<option value="85" className=' '>Guamanian</option>
<option value="86" className=' '>Guatemalan</option>
<option value="87" className=' '>Guinean</option>
<option value="88" className=' '>Guyanese</option>
<option value="89" className=' '>Haitian</option>
<option value="90" className=' '>Honduran</option>
<option value="91" className=' '>Hong Konger</option>
<option value="92" className=' '>Hungarian</option>
<option value="93" className=' '>Icelander</option>
<option value="94" className=' '>Indian</option>
<option value="95" className=' '>Indonesian</option>
<option value="96" className=' '>Iranian</option>
<option value="97" className=' '>Iraqi</option>
<option value="98" className=' '>Irish</option>
<option value="99" className=' '>Israeli</option>
<option value="100" className=' '>Italian</option>
<option value="101" className=' '>Ivorian</option>
<option value="102" className=' '>Jamaican</option>
<option value="103" className=' '>Japanese</option>
<option value="104" className=' '>Jordanian</option>
<option value="105" className=' '>Kazakhstani</option>
<option value="106" className=' '>Kenyan</option>
<option value="107" className=' '>Kiribatian</option>
<option value="108" className=' '>Kuwaiti</option>
<option value="109" className=' '>Kyrgyz</option>
<option value="110" className=' '>Laotian</option>
<option value="111" className=' '>Latvian</option>
<option value="112" className=''>Kosovar</option>
<option value="113" className=''>Kuwaiti</option>
<option value="114" className=''>Kyrgyzstani</option>
<option value="115" className=''>Lao</option>
<option value="116" className=''>Latvian</option>
<option value="117" className=''>Lebanese</option>
<option value="118" className=''>Basotho</option>
<option value="119" className=''>Liberian</option>
<option value="120" className=''>Libyan</option>
<option value="121" className=''>Liechtensteiner</option>
<option value="122" className=''>Lithuanian</option>
<option value="123" className=''>Luxembourger</option>
<option value="124" className=''>Macanese</option>
<option value="125" className=''>Malagasy</option>
<option value="126" className=''>Malawian</option>
<option value="127" className=''>Malaysian</option>
<option value="128" className=''>Maldivian</option>
<option value="129" className=''>Malian</option>
<option value="130" className=''>Maltese</option>
<option value="131" className=''>Marshallese</option>
<option value="132" className=''>Martinican</option>
<option value="133" className=''>Mauritanian</option>
<option value="134" className=''>Mauritian</option>
<option value="135" className=''>Mahoran</option>
<option value="136" className=''>Mexican</option>
<option value="137" className=''>Micronesian</option>
<option value="138" className=''>Moldovan</option>
<option value="139" className=''>Monegasque</option>
<option value="140" className=''>Mongolian</option>
<option value="141" className=''>Montenegrin</option>
<option value="142" className=''>Montserratian</option>
<option value="143" className=''>Moroccan</option>
<option value="144" className=''>Mozambican</option>
<option value="145" className=''>Namibian</option>
<option value="146" className=''>Nauruan</option>
<option value="147" className=''>Nepali</option>
<option value="148" className=''>Dutch</option>
<option value="149" className=''>New Caledonian</option>
<option value="150" className=''>New Zealander</option>
<option value="151" className=''>Nicaraguan</option>
<option value="152" className=''>Nigerien</option>
<option value="153" className=''>Nigerian</option>
<option value="154" className=''>Niuean</option>
<option value="155" className=''>Norfolk Islander</option>
<option value="156" className=''>Northern Mariana Islander</option>
<option value="157" className=''>Norwegian</option>
<option value="158" className=''>Omani</option>
<option value="159" className=''>Pakistani</option>
<option value="160" className=''>Palauan</option>
<option value="161" className=''>Palestinian</option>
<option value="162" className=''>Panamanian</option>
<option value="163" className=''>Papua New Guinean</option>
<option value="164" className=''>Paraguayan</option>
<option value="165" className=''>Peruvian</option>
<option value="166" className=''>Filipino</option>
<option value="167" className=''>Pitcairn Islander</option>
<option value="168" className=''>Polish</option>
<option value="169" className=''>Portuguese</option>
<option value="170" className=''>Puerto Rican</option>
<option value="171" className=''>Qatari</option>
<option value="172" className=''>Réunionese</option>
<option value="173" className=''>Romanian</option>
<option value="174" className=''>Russian</option>
<option value="175" className=''>Rwandan</option>
<option value="176" className=''>Saint Barthélemy Islander</option>
<option value="177" className=''>Saint Helenian</option>
<option value="178" className=''>Kittitian</option>
<option value="179" className=''>Saint Lucian</option>
<option value="180" className=''>Saint Martin Islander</option>
<option value="181" className=''>Saint Pierre </option>
<option value="182" className=''>Saint Vincentian</option>
<option value="183" className=''>Sammarinese</option>
<option value="184" className=''>São Toméan</option>
<option value="185" className=''>Saudi</option>
<option value="186" className=''>Senegalese</option>
<option value="187" className=''>Serbian</option>
<option value="188" className=''>Seychellois</option>
<option value="189" className=''>Sierra Leonean</option>
<option value="190" className=''>Singaporean</option>
<option value="191" className=''>Slovak</option>
<option value="192" className=''>Slovenian</option>
<option value="193" className=''>Solomon Islander</option>
<option value="194" className=''>Somali</option>
<option value="195" className=''>South African</option>
<option value="196" className=''>South Georgia </option>
<option value="197" className=''>South Sudanese</option>
<option value="198" className=''>Spanish</option>
<option value="199" className=''>Sri Lankan</option>
<option value="200" className=''>Sudanese</option>
<option value="201" className=''>Surinamese</option>
<option value="202" className=''>Swazi</option>
<option value="203" className=''>Swedish</option>
<option value="204" className=''>Swiss</option>
<option value="205" className=''>Syrian</option>
<option value="206" className=''>Taiwanese</option>
<option value="207" className=''>Tajik</option>
<option value="208" className=''>Tanzanian</option>
<option value="209" className=''>Thai</option>
<option value="210" className=''>Togolese</option>
<option value="211" className=''>Tongan</option>
<option value="212" className=''>Trinidadian or Tobagonian</option>
<option value="213" className=''>Tunisian</option>
<option value="214" className=''>Turkish</option>
<option value="215" className=''>Turkmen</option>
<option value="216" className=''>Tuvaluan</option>
<option value="217" className=''>Ugandan</option>
<option value="218" className=''>Ukrainian</option>
<option value="219" className=''>Uruguayan</option>
<option value="220" className=''>Uzbekistani</option>
<option value="221" className=''>Venezuelan</option>
<option value="222" className=''>Vietnamese</option>
<option value="223" className=''>Yemeni</option>
<option value="224" className=''>Zambian</option>
<option value="225" className=''>Zimbabwean</option>

</select>


        
<p className='quali'>PUC Stream</p>  
<select id="high" name="high" className='high'>
          <option value="1"></option>
          <option value="2" className='grad'>Bio-Sci</option>
          <option value="3" className='post'> Comp-Sci</option>
          <option value="4" className='dipl'>Commerce</option>
          <option value="5" className='hum'>Humanities</option>
        </select>


<button className='save'onClick={handleSave}>SAVE</button>

</div>
);
}

export default Page;
