import React from 'react'
import './order.scss'

function Order() {

    let loafNum = 0;


    const loafNumber = (e) => {
        e.preventDefault();
        loafNum = e.target.value;
        let dropdowns = document.querySelectorAll('.num-select');
        dropdowns.forEach((drop, i) => {
            if(i < loafNum) {
                drop.classList.remove('hide')
            } else {
                drop.classList.remove('hide');
                drop.classList.add('hide')
            }
        })
    }

  return (
    <section className="order-container" id="order">
        <div className="filter">
        <div className="order">
            <h2>Challo There!</h2>
            <p>Well heck, you made it. Here is the order form for August!</p>
            <p>We're filling up quick, so we recommend putting in orders for any week that month that you'd like a loaf.</p>
            <p>At the moment we're only in LA and can deliver within a five mile radius of Culver City for a service fee. That said, pickup is always an option if that works for you.</p>
            <p>For payment we accept <a href="#">venmo</a> (@challahdad), cash, or check upon pickup/delivery.</p>
            <p>If you have any specific questions, feel free to message <a href="#">@challahdad</a> on instagram or email us at <a href="#">hello@challahdad.com</a></p>
            <p>With Loaf,</p>
            <p>Challahdad</p>
        </div>

        <div className="order-form">
            <form action="submit">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="name" />
                <br />
                <label htmlFor="phone">Phone</label>
                <br />
                <input type="phone" className="phone" />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" className="email" />
                <br />
                <label htmlFor="instagram">instagram</label>
                <br />
                <input type="text" className="instagram" />
                <br />
                <fieldset className="fieldset">
                <label htmlFor="loaves">How many loaves would you like?</label>
                <br />
                    <input type="radio" value="1" name='num-radio' onClick={(e) => loafNumber(e)} />1
                    <input type="radio" value="2" name='num-radio' onClick={(e) => loafNumber(e)} />2
                    <input type="radio" value="3" name='num-radio' onClick={(e) => loafNumber(e)} />3
                    <input type="radio" value="4" name='num-radio' onClick={(e) => loafNumber(e)} />4
                    <input type="radio" value="Other" name='num-radio'/>other
                </fieldset>
                <fieldset className="fieldset num-select hide" >
                    <label htmlFor="loaf-one">1st Loaf</label>
                    <br />
                    <select name="loaf-one" id="loaf-one">
                        <option value="saltydad">saltydad</option>
                        <option value="the funcle">the funcle</option>
                        <option value="za'dad">za'dad</option>
                        <option value="shriveldad">shriveldad</option>
                        <option value="sugardad">sugardad</option>
                        <option value="cheesydad">cheesydad</option>
                        <option value="GFather">GFather</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset num-select hide" >
                    <label htmlFor="loaf-two">2nd Loaf</label>
                    <br />
                    <select name="loaf-two" id="loaf-two">
                        <option value="saltydad">saltydad</option>
                        <option value="the funcle">the funcle</option>
                        <option value="za'dad">za'dad</option>
                        <option value="shriveldad">shriveldad</option>
                        <option value="sugardad">sugardad</option>
                        <option value="cheesydad">cheesydad</option>
                        <option value="GFather">GFather</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset num-select hide" >
                    <label htmlFor="loaf-three">3rd Loaf</label>
                    <br />
                    <select name="loaf-three" id="loaf-three">
                        <option value="saltydad">saltydad</option>
                        <option value="the funcle">the funcle</option>
                        <option value="za'dad">za'dad</option>
                        <option value="shriveldad">shriveldad</option>
                        <option value="sugardad">sugardad</option>
                        <option value="cheesydad">cheesydad</option>
                        <option value="GFather">GFather</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset num-select hide" >
                    <label htmlFor="loaf-four">4th Loaf</label>
                    <br />
                    <select name="loaf-four" id="loaf-four">
                        <option value="saltydad">saltydad</option>
                        <option value="the funcle">the funcle</option>
                        <option value="za'dad">za'dad</option>
                        <option value="shriveldad">shriveldad</option>
                        <option value="sugardad">sugardad</option>
                        <option value="cheesydad">cheesydad</option>
                        <option value="GFather">GFather</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <label htmlFor="topping">If ordering GFather (gluten free) please specify which topping you'd like.</label>
                    <br />
                    <select name="loaf-one" id="loaf-one">
                        <option value="n/a">n/a</option>
                        <option value="plain">plain (no topping)</option>
                        <option value="salt">salt</option>
                        <option value="sesame">sesame</option>
                        <option value="poppy">poppy</option>
                        <option value="za'atar">za'atar</option>
                        <option value="everything bagel seasoning">everything bagel seasoning</option>
                        <option value="cinnamon and sugar">cinnamon and sugar</option>
                    </select>
                </fieldset> 
                <fieldset className="fieldset">
                    <label htmlFor="week">What week are you ordering for?</label>
                    <br />
                        <input type="radio" value="1"/>first
                        <input type="radio" value="2"/>second
                        <input type="radio" value="3"/>third
                        <input type="radio" value="4"/>fourth
                </fieldset> 
                <fieldset className="fieldset">
                    <label htmlFor="method">Pickup (Culver City) or delivery (within five miles from culver city) for an additional $10 fee?</label>
                    <br />
                        <input type="radio" value="pickup"/>Pickup
                        <input type="radio" value="delivery"/>Delivery
                </fieldset>  
                <fieldset className="fieldset">
                    <label htmlFor="date">Preferred pickup/delivery date</label>
                    <br />
                    <select name="date" id="date">
                        <option value="Wenesday Evening">Wenesday Evening</option>
                        <option value="Thursday Evening">Thursday Evening</option>
                        <option value="Friday Before Noon">Friday Before Noon</option>
                        <option value="Other">Other</option>
                    </select>
                </fieldset> 
                <fieldset className="fieldset">
                    <label htmlFor="weekly">Are you interested in a challahdad subscription? (this is the best way to secure a spot!)</label>
                    <br />
                    <select name="weekly" id="weekly">
                        <option value="no">No Thanks (one time order)</option>
                        <option value="weekly">Yes! Weekly</option>
                        <option value="bi-weekly">Yes! Bi-weekly</option>
                        <option value="monthly">Yes! Monthly</option>
                        <option value="member">I'm already a subscriber you silly goose!</option>
                    </select>
                </fieldset> 
                <fieldset className="fieldset">
                    <label htmlFor="acknowledgment">Attention customers with food allergies, our challah ingredients are flour, water, yeast, eggs, sugar, honey, salt, vegetable / olive oil, and the toppins disclosed on the menu. Please note that our gluten free challah (GFather) uses a gluten free flour mix but may contain trace amounts of gluten as they are baked in the same kitchen. Additionally please be aware our food may contain or come into contact with common allergens such as dairy, eggs, wheat, soybeans, tree nuts, peanuts, fish or shellfish.</label>
                    <br />
                    <input type="checkbox" name="acknowledgement" id="acknowledgement" />
                </fieldset> 
            </form>
        </div>
        </div>
    </section>
  )
}

export default Order