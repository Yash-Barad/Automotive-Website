$(document).ready(function () {
    const fleetData = [
        // SUVs
        { id: "seltos", name: "Kia Seltos", form: "SUV", price: "₹ 10.9 - 20.3 Lakh", engine: "1.5L CRDi VGT / 1.5L T-GDi", power: "116 - 160 PS", torque: "250 - 253 Nm", transmission: "6-MT / 6-iMT / 7-DCT", image: "./assets/kia seltos.jpg", formId: "suv", focusId: "highway", desc: "Aggressive styling and high-speed stability make this perfect for intercity transit." },
        { id: "creta", name: "Hyundai Creta", form: "SUV", price: "₹ 11.0 - 20.3 Lakh", engine: "1.5L MPi / 1.5L CRDi", power: "115 - 160 PS", torque: "144 - 250 Nm", transmission: "6-MT / IVT / 7-DCT", image: "./assets/creata.jpg", formId: "suv", focusId: "city", desc: "The benchmark urban SUV, providing supreme comfort in heavy metropolitan traffic." },
        { id: "kushaq", name: "Skoda Kushaq", form: "SUV", price: "₹ 11.9 - 19.8 Lakh", engine: "1.0L TSI / 1.5L TSI", power: "115 - 150 PS", torque: "178 - 250 Nm", transmission: "6-MT / 6-AT / 7-DSG", image: "./assets/skoda Kushaq.jpg", formId: "suv", focusId: "city", desc: "Nimble European dynamics tailored for dense city navigation." },
        { id: "xuv700", name: "Mahindra XUV700", form: "SUV", price: "₹ 14.0 - 26.6 Lakh", engine: "2.0L mStallion / 2.2L mHawk", power: "200 - 185 PS", torque: "380 - 450 Nm", transmission: "6-MT / 6-AT", image: "./assets/Xuv 7xo.jpg", formId: "suv", focusId: "highway", desc: "A tech-laden powerhouse built to devour long highway miles." },
        { id: "scorpion", name: "Mahindra Scorpio-N", form: "SUV", price: "₹ 13.6 - 24.5 Lakh", engine: "2.0L mStallion / 2.2L mHawk", power: "203 - 175 PS", torque: "380 - 400 Nm", transmission: "6-MT / 6-AT", image: "./assets/Scorpio N.jpg", formId: "suv", focusId: "highway", desc: "Ladder-frame ruggedness for unpredictable out-of-city assignments." },
        { id: "harrier", name: "Tata Harrier", form: "SUV", price: "₹ 15.5 - 26.4 Lakh", engine: "2.0L Kryotec Diesel", power: "170 PS", torque: "350 Nm", transmission: "6-MT / 6-AT", image: "./assets/Tata Harrier.jpg", formId: "suv", focusId: "highway", desc: "Commanding road presence with robust highway performance." },
        { id: "safari", name: "Tata Safari", form: "SUV", price: "₹ 16.2 - 27.3 Lakh", engine: "2.0L Kryotec Diesel", power: "170 PS", torque: "350 Nm", transmission: "6-MT / 6-AT", image: "./assets/Tata Safari.jpg", formId: "suv", focusId: "highway", desc: "Three-row luxury for executive team transport over long distances." },
        { id: "sonet", name: "Kia Sonet", form: "Compact SUV", price: "₹ 8.0 - 15.7 Lakh", engine: "1.2L / 1.0L Turbo / 1.5L Diesel", power: "83 - 120 PS", torque: "115 - 250 Nm", transmission: "5-MT / 6-iMT / 7-DCT", image: "./assets/Kia Sonet.jpg", formId: "suv", focusId: "city", desc: "Compact dimensions with SUV height, ideal for tight urban parking." },

        // Sedans
        { id: "virtus", name: "Volkswagen Virtus", form: "Sedan", price: "₹ 11.5 - 19.4 Lakh", engine: "1.0L TSI / 1.5L TSI EVO", power: "115 - 150 PS", torque: "178 - 250 Nm", transmission: "6-MT / 6-AT / 7-DSG", image: "./assets/Vw virtus.jpg", formId: "sedan", focusId: "highway", desc: "German engineering providing exceptional high-speed stability and executive styling." },
        { id: "verna", name: "Hyundai Verna", form: "Sedan", price: "₹ 11.0 - 17.4 Lakh", engine: "1.5L MPi / 1.5L Turbo GDi", power: "115 - 160 PS", torque: "144 - 253 Nm", transmission: "6-MT / IVT / 7-DCT", image: "./assets/Verna.jpg", formId: "sedan", focusId: "city", desc: "Tech-forward sedan with light steering perfectly suited for city commutes." },
        { id: "city", name: "Honda City", form: "Sedan", price: "₹ 11.7 - 16.3 Lakh", engine: "1.5L i-VTEC", power: "121 PS", torque: "145 Nm", transmission: "6-MT / CVT", image: "./assets/City.jpg", formId: "sedan", focusId: "city", desc: "The classic executive choice. Reliable, spacious, and extremely comfortable in traffic." },
        { id: "civic", name: "Honda Civic", form: "Sedan", price: "Discontinued (Ref)", engine: "1.8L i-VTEC", power: "141 PS", torque: "174 Nm", transmission: "CVT", image: "./assets/Civic.jpg", formId: "sedan", focusId: "highway", desc: "Low-slung, aerodynamic profile perfect for high-speed cruising." },

        // Hatchbacks & Crossovers
        { id: "i20", name: "Hyundai i20", form: "Hatchback", price: "₹ 7.0 - 11.2 Lakh", engine: "1.2L Kappa", power: "83 PS", torque: "115 Nm", transmission: "5-MT / IVT", image: "./assets/i20n.jpg", formId: "hatchback", focusId: "city", desc: "Premium hatchback offering sophisticated features in a compact, parkable footprint." },
        { id: "baleno", name: "Maruti Suzuki Baleno", form: "Hatchback", price: "₹ 6.6 - 9.9 Lakh", engine: "1.2L DualJet", power: "90 PS", torque: "113 Nm", transmission: "5-MT / 5-AMT", image: "./assets/Baleno.jpg", formId: "hatchback", focusId: "city", desc: "Highly efficient and practical urban runner for daily fleet operations." },
        { id: "fronx", name: "Maruti Suzuki Fronx", form: "Crossover", price: "₹ 7.5 - 13.1 Lakh", engine: "1.2L / 1.0L BoosterJet", power: "90 - 100 PS", torque: "113 - 148 Nm", transmission: "5-MT / 6-AT", image: "./assets/fronx.jpg", formId: "hatchback", focusId: "city", desc: "Crossover styling meets hatchback efficiency for rough urban roads." },
        { id: "swift", name: "Maruti Suzuki Swift", form: "Hatchback", price: "₹ 6.0 - 9.0 Lakh", engine: "1.2L DualJet", power: "90 PS", torque: "113 Nm", transmission: "5-MT / 5-AMT", image: "./assets/swift.jpg", formId: "hatchback", focusId: "city", desc: "Agile, economical, and perfectly suited for fast-paced city maneuvering." },

        // MPV / Eco Hybrid
        { id: "innova", name: "Toyota Innova Hycross", form: "MPV", price: "₹ 19.0 - 30.5 Lakh", engine: "2.0L Strong Hybrid", power: "186 PS", torque: "206 Nm", transmission: "e-Drive", image: "./assets/innova.jpg", formId: "mpv", focusId: "eco", desc: "The ultimate executive hybrid people mover. Silent, spacious, and highly efficient." }
    ];

    window.allocatedCarId = fleetData[0].id;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) $('#main-nav').addClass('scrolled');
        else $('#main-nav').removeClass('scrolled');
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    $('.reveal-up').each(function () { observer.observe(this); });


    let matrixForm = null;
    let matrixFocus = null;

    $('.matrix-btn').on('click', function () {
        const group = $(this).parent().attr('id');
        $('#' + group + ' .matrix-btn').removeClass('active');
        $(this).addClass('active');

        if (group === 'form-selector') matrixForm = $(this).data('value');
        if (group === 'focus-selector') matrixFocus = $(this).data('value');

        if (matrixForm && matrixFocus) {
            $('#run-matrix-btn').removeClass('disabled btn-light').addClass('btn-accent');
        }
    });

    $('#run-matrix-btn').on('click', function () {
        if ($(this).hasClass('disabled')) return;

        let match = fleetData.find(c => c.formId === matrixForm && c.focusId === matrixFocus)
            || fleetData.find(c => c.formId === matrixForm);

        if (!match) match = fleetData.find(c => c.id === 'seltos');

        window.allocatedCarId = match.id;

        $('#alloc-img').attr('src', match.image).hide().fadeIn(800);
        $('#alloc-title').text(match.name);
        $('#alloc-desc').text(match.desc);
        $('#allocation-result').slideDown(600);

        $('html, body').animate({ scrollTop: $("#allocation-result").offset().top - 100 }, 800);
    });


    fleetData.forEach((car, index) => {
        const activeClass = index === 0 ? 'active' : '';
        $('#spec-list').append(`
            <div class="list-group-item p-4 ${activeClass}" data-id="${car.id}">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="mb-1 fw-bold">${car.name}</h5>
                        <small class="text-light opacity-50 text-uppercase tracking-wide">${car.form}</small>
                    </div>
                    <i class="fas fa-chevron-right text-secondary fs-6"></i>
                </div>
            </div>
        `);
        $('#compare-1').append(`<option value="${car.id}" ${index === 0 ? 'selected' : ''}>${car.name}</option>`);
        $('#compare-2').append(`<option value="${car.id}" ${index === 1 ? 'selected' : ''}>${car.name}</option>`);
    });

    window.updateSpecs = function (carId) {
        const car = fleetData.find(c => c.id === carId);
        if (!car) return;

        // Update active class in sidebar
        $('.list-group-item').removeClass('active');
        $(`.list-group-item[data-id="${carId}"]`).addClass('active');

        $('#spec-grid').animate({ opacity: 0 }, 200, function () {
            $('#spec-title').text(car.name);
            $('#spec-subtitle').text(car.form.toUpperCase());
            $('#spec-price').text(car.price);
            $('#data-engine').text(car.engine);
            $('#data-power').text(car.power);
            $('#data-torque').text(car.torque);
            $('#data-trans').text(car.transmission);
            $('#spec-image').attr('src', car.image);
            $(this).animate({ opacity: 1 }, 300);
        });
    };

    updateSpecs(fleetData[0].id);

    $(document).on('click', '.list-group-item', function () {
        updateSpecs($(this).data('id'));
    });


    function updateCompare() {
        const c1 = fleetData.find(c => c.id === $('#compare-1').val());
        const c2 = fleetData.find(c => c.id === $('#compare-2').val());

        $('#comp-img-1 img').attr('src', c1.image).hide().fadeIn(400);
        $('#comp-img-2 img').attr('src', c2.image).hide().fadeIn(400);
        $('#comp-price-1').text(c1.price);
        $('#comp-price-2').text(c2.price);
        $('#comp-engine-1').html(`<strong>Engine:</strong><br>${c1.engine}`);
        $('#comp-engine-2').html(`<strong>Engine:</strong><br>${c2.engine}`);
        $('#comp-power-1').html(`<strong>Power:</strong><br>${c1.power} <br> <span class="text-secondary">${c1.torque}</span>`);
        $('#comp-power-2').html(`<strong>Power:</strong><br>${c2.power} <br> <span class="text-secondary">${c2.torque}</span>`);
    }

    $('#compare-1, #compare-2').on('change', updateCompare);
    updateCompare();



    function calculateLease() {
        const value = parseFloat($('#lease-value').val());
        const downPct = parseFloat($('#lease-down').val());
        const years = parseFloat($('#lease-tenure').val());

        $('#down-val-display').text(downPct + '%');
        if (isNaN(value) || value < 100000) return;

        const principal = value - (value * (downPct / 100));
        const ratePerMonth = (8.5 / 100) / 12;
        const months = years * 12;
        const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1);

        $('#lease-result').text('₹ ' + Math.round(emi).toLocaleString('en-IN'));
    }

    $('#lease-value, #lease-down, #lease-tenure').on('input change', calculateLease);
    calculateLease();
});