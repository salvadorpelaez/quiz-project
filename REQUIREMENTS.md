# What's Your Coffee Personality? — Quiz Requirements

## Personality → Coffee Pairings

| # | Personality | Coffee | Tagline |
|---|-------------|--------|---------|
| 1 | Bold Adventurer | Double Espresso | "You live for intensity" |
| 2 | Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| 3 | Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |
| 4 | Cozy Classic | Medium Roast Drip | "Comfort in every cup" |

---

## Result Display Style
**Single recommendation** — show the user their top personality and coffee match only.
Example: "You're a Bold Adventurer! Your coffee: Double Espresso."

---

## Visual Style
**Warm & Cozy (Style 4)**
- Background: soft warm gradient (light tan to cream: #f5e6d3 → #edd9c0)
- Card: off-white (#fffaf5), rounded corners (20px), soft shadow
- Typography: Lora serif for headings, DM Sans for body
- Accent color: warm brown/orange (#c07840)
- Answer options: warm beige cards (#fdf3e7) with border that highlights on hover
- Progress bar: warm gradient

---

## Images
None for now — can be added later during iteration.

---

## Icons
No icons — text-only answer options for a clean look.

---

## Quiz Questions

### Q1: You're handed a blank canvas and unlimited paint. What do you do?
- A) Paint something explosive and chaotic — who cares if it's messy → **Bold Adventurer**
- B) Stare at it for 10 minutes, then paint one perfect brushstroke → **Zen Minimalist**
- C) Make something practical — maybe a sign for your house → **Practical Pragmatist**
- D) Paint something soft and nostalgic → **Cozy Classic**

### Q2: You find $100 on the ground. First instinct?
- A) Book a last-minute flight somewhere → **Bold Adventurer**
- B) Put it in savings. Already have what I need. → **Zen Minimalist**
- C) Pay off something practical → **Practical Pragmatist**
- D) Order food and have a cozy night in → **Cozy Classic**

### Q3: What color is your soul today?
- A) Red — intense, electric, always moving → **Bold Adventurer**
- B) White — clean, clear, infinite → **Zen Minimalist**
- C) Gray — reliable, steady, gets things done → **Practical Pragmatist**
- D) Warm amber — soft, glowing, comfortable → **Cozy Classic**

### Q4: A spaceship lands in your backyard. The aliens invite you aboard. You:
- A) Jump in immediately — no questions → **Bold Adventurer**
- B) Politely decline. Your garden is fine. → **Zen Minimalist**
- C) Ask for the safety rating and departure schedule → **Practical Pragmatist**
- D) Invite them in for coffee first → **Cozy Classic**

### Q5: Your ideal Sunday morning looks like:
- A) You're already mid-hike, no plan, loving it → **Bold Adventurer**
- B) Silence. Tea. Nothing scheduled. → **Zen Minimalist**
- C) Grocery run, laundry done by 10am → **Practical Pragmatist**
- D) Blanket, book, something warm in your hands → **Cozy Classic**

### Q6: If your brain were a room, it would be:
- A) A control room with 47 screens all active → **Bold Adventurer**
- B) An empty room with one window and great light → **Zen Minimalist**
- C) A well-organized office with labeled folders → **Practical Pragmatist**
- D) A cozy living room with too many books → **Cozy Classic**

---

## Scoring Logic
- Each answer maps to one of the 4 personalities
- At the end, tally which personality was selected most
- Show the winning personality + coffee recommendation
- In case of a tie, show the first personality that reached the highest score
